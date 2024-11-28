'use client';
import React, { useState } from "react";
import { gql, useQuery } from "@apollo/client";
import client from "../lib/apollo-client";

const GET_POSTS = gql`
  query GetPosts($first: Int!, $after: String) {
    posts(first: $first, after: $after, where: { status: PUBLISH }) {
      edges {
        node {
          id
          title
          excerpt
          link
          slug
          featuredImage {
            node {
              sourceUrl
              
            }
          }
          date
        }
      }
      pageInfo {
        endCursor
        hasNextPage
        startCursor
        hasPreviousPage
      }
    }
  }
`;

const Notícias = () => {
  const postsPerPage = 8; // Número de posts por página
  const [currentPage, setCurrentPage] = useState(1); // Página atual
  const [cursor, setCursor] = useState(null); // Usado para navegação entre as páginas

  // Função para limitar o número de palavras no excerpt
  const truncateText = (text, wordLimit) => {
    const words = text.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + " ...";
    }
    return text;
  };

  // Realiza a consulta passando os parâmetros de paginação
  const { data, loading, error } = useQuery(GET_POSTS, {
    client,
    variables: {
      first: postsPerPage,
      after: cursor, // Envia o cursor de paginação, se existir
    },
  });

  if (loading)
    return (
      <p className="text-center text-[25px] text-[#003470] mt-[200px] font-bold">
        Carregando notícias...
      </p>
    );

  if (error)
    return (
      <p className="text-center text-[25px] text-red-500 mt-[200px] font-bold">
        Ocorreu um erro ao carregar as notícias.
      </p>
    );

  // Função para mudar de página
  const handlePageChange = (direction) => {
    let newCursor = cursor;
    let newPage = currentPage;

    if (direction === 'next' && data.posts.pageInfo.hasNextPage) {
      newCursor = data.posts.pageInfo.endCursor;
      newPage += 1;
    } else if (direction === 'prev' && data.posts.pageInfo.hasPreviousPage) {
      newCursor = data.posts.pageInfo.startCursor;
      newPage -= 1;
    }

    setCursor(newCursor);
    setCurrentPage(newPage);
  };

  return (
    <section className="mb-10">

      {/* AS NOTÍCIAS VIA GRAPHQL */}
      <div className="mt-10 w-full py-10 px-16 mx-auto p-4">
        {/* Grid para 4 colunas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {data.posts.edges.map(({ node }) => (
            <div key={node.id} className="p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 bg-white">
              {node.featuredImage && (
                <img
                  src={`/api/image-proxy?url=${encodeURIComponent(node.featuredImage.node.sourceUrl)}`}
                  alt={node.title}
                  className="w-full h-48 object-cover"
                />
              )}
              <h2 className="text-2xl font-semibold mt-2">{node.title}</h2>
              {/* Exibe a data e a hora do post */}
              <p className="text-gray-500 text-sm mt-1">
                {new Date(node.date).toLocaleDateString("pt-BR")} | {new Date(node.date).toLocaleTimeString("pt-BR")}
              </p>
              <a
                href={`/noticias/${node.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline mt-2 block"
              >
                Leia mais
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Paginação */}
      <div className="flex justify-center mt-8">
        <button
          onClick={() => handlePageChange('prev')}
          disabled={currentPage === 1}
          className="px-4 py-2 mx-2 bg-[#DFDFDF] text-[#003470] rounded disabled:bg-gray-400"
        >
          «
        </button>

        <span className="px-4 py-2 mx-2 bg-[#ffff] hover:bg-[#FFC719] text-[#003470] rounded">
          {currentPage}
        </span>

        <button
          onClick={() => handlePageChange('next')}
          disabled={!data.posts.pageInfo.hasNextPage}
          className="px-4 py-2 mx-2 bg-[#DFDFDF] text-[#003470] rounded disabled:bg-gray-400"
        >
          »
        </button>
      </div>
    </section>
  );
};

export default Notícias;
