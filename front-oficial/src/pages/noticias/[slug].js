'use client';
import React from "react";
import { gql } from "@apollo/client";
import client from "../../lib/apollo-client";
import { useRouter } from "next/router";
import RootLayout from "@/app/layout";
import NoticiasLayout from "@/components/models/Noticias/model-noticias";
import Head from 'next/head'; // Importa o Head do Next.js

// Consulta GraphQL para buscar uma notícia pelo slug
const GET_POST_BY_SLUG = gql`
  query GetPostBySlug($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      title
      content
      featuredImage {
        node {
          sourceUrl
        }
      }
      date
    }
  }
`;

const NoticiaDetalhada = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <p className="text-center text-[25px] text-[#003470] mt-[200px] font-bold">
        Carregando...
      </p>
    );
  }

  return (
    <>
      {/* Adiciona o título da página na tag <title> */}
      <Head>
        <title>{post.title}</title>
      </Head>

      <NoticiasLayout>
        <section className="flex flex-col justify-center items-center py-10">
           
          <div className="flex flex-col justify-center items-center bg-slate-600 h-screen w-full"> 
          {/* Imagem destacada */}
          {post.featuredImage && (
            <img
            src={`/api/image-proxy?url=${encodeURIComponent(post.featuredImage.node.sourceUrl)}`}
            alt={post.title}
            className="w-full h-[calc(100vh-6rem)] object-cover rounded-t"
            style={{ maxHeight: "calc(100vh - 6rem)" }}
          />
          )}

          {/* Título da notícia */}
          <div className="absolute bottom-0 left-0 w-full bg-[#00347097] p-4">
            <h1 className="uppercase Montserrat-Bold text-4xl font-bold text-white text-center drop-shadow-2xl">
              {post.title}
            </h1>
            <p className="text-sm text-white mt-2 flex justify-center items-center">
              Publicado em: {new Date(post.date).toLocaleDateString("pt-BR")}
            </p>
          </div>
          </div>




          {/* Conteúdo */}
          <div
            className="content mt-10 mb-10 leading-relaxed text-gray-700 px-20"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />


        </section>
      </NoticiasLayout>
    </>
  );
};

// Gera as páginas dinâmicas com base nos slugs
export async function getStaticPaths() {
  const { data } = await client.query({
    query: gql`
      query GetPostSlugs {
        posts(first: 10) {
          edges {
            node {
              slug
            }
          }
        }
      }
    `,
  });

  const paths = data.posts.edges.map(({ node }) => ({
    params: { slug: node.slug },
  }));

  return {
    paths,
    fallback: true,
  };
}

// Busca os dados da notícia pelo slug
export async function getStaticProps({ params }) {
  const { data } = await client.query({
    query: GET_POST_BY_SLUG,
    variables: {
      slug: params.slug,
    },
  });

  if (!data.post) {
    return { notFound: true };
  }

  return {
    props: {
      post: data.post,
    },
    revalidate: 60, // Revalida a cada 60 segundos
  };
}

// Aplica o RootLayout como layout para essa página
NoticiaDetalhada.getLayout = function getLayout(page) {
  return <NoticiasLayout>{page}</NoticiasLayout>;
};

export default NoticiaDetalhada;
