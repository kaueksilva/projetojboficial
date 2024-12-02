'use client';
import React, { useState } from "react";
import { gql, useQuery } from "@apollo/client";
import client from "../lib/apollo-client";

// Query para pegar os posts, com a categoria "Controladoria"
const GET_FILTERED_POSTS = gql`
  query GetFilteredPosts($first: Int!, $after: String, $status: PostStatusEnum) {
    posts(
      first: $first
      after: $after
      where: { categoryName: "Controladoria", status: $status }
    ) {
      edges {
        node {
          id
          title
          date
          featuredImage {
            node {
              sourceUrl
            }
          }
          categories {
            edges {
              node {
                name
              }
            }
          }
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

const NotíciasControladoria = () => {
  const postsPerPage = 8; // Número de posts por página
  const [currentPage, setCurrentPage] = useState(1); // Página atual
  const [cursor, setCursor] = useState(null); // Usado para navegação entre as páginas

  // IDs das categorias a serem excluídas
  const excludedCategories = [2754, 2734];

  // Realiza a consulta passando os parâmetros de paginação e exclusão de categorias
  const { data, loading, error } = useQuery(GET_FILTERED_POSTS, {
    client,
    variables: {
      first: postsPerPage,
      after: cursor, // Envia o cursor de paginação, se existir
      status: "PUBLISH", // Apenas posts publicados
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
              {/* Exibe a data */}
              <p className="text-gray-500 text-sm mt-1">
                {new Date(node.date).toLocaleDateString("pt-BR")}
              </p>
              <a
                href={`/noticias/${node.id}`}
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

export default NotíciasControladoria;
