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
        <section className="relative h-screen flex flex-col">
          {/* Imagem destacada */}
          {post.featuredImage && (
            <img
              src={`/api/image-proxy?url=${encodeURIComponent(post.featuredImage.node.sourceUrl)}`}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          )}

          {/* Título sobreposto */}
          <div className="absolute bottom-0 left-0 w-full bg-[#00347097] p-4 drop-shadow-[0_4px_6px_rgba(0,0,0,0.9)]">
            <h1 className="Montserrat-Bold uppercase text-4xl text-white text-center">
              {post.title}
            </h1>
            <p className="text-sm text-white mt-2 text-center">
              Publicado em: {new Date(post.date).toLocaleDateString("pt-BR")}
            </p>
          </div>
        </section>


        {/* Conteúdo */}
        <div
          className="montserrat-regular leading-loose content justify-center my-10 mx-56 box-shadow-2xl text-gray-700 px-20 text-xl"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
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
