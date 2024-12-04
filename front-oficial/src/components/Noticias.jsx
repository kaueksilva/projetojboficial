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
      {/* Título "Notícias" */}
      <div id="Notícias" className="Notícias border-t border-[#FFC719] bg-[#003470]">
        <h1 className="font-montserrat font-semibold text-4xl text-white flex justify-center p-3 mt-28">
          MAIS NOTÍCIAS
        </h1>
      </div>
      {/* DIVISOR DE FORMA*/}
      <div className="relative w-full">
          <svg
            width="100%"
            viewBox="0 0 2000 96"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.33"
              d="M946 62.22C538.2 152.254 419.8 27.5523 305.4 62.22C132 115.037 0 54.4708 0 54.4708V-6.40161H2000V54.4708C2000 54.4708 1875.8 81.0833 1810.2 84.3462C1744.6 87.711 1684.6 71.8046 1658.6 61.8122C1612 44.1724 1490.6 2.46924 1389.8 -1.60931C1289 -5.68786 984.8 53.757 946 62.22Z"
              fill="#003470"
            />
            <path
              opacity="0.66"
              d="M1468 62.22C1377 62.22 1313.6 38.5644 1209.8 22.3522C1152.6 13.4813 909.2 12.0538 701.8 62.22C494.4 112.386 518.4 27.1445 403.4 62.22C231.4 114.222 0 34.18 0 34.18V-6.40161H2000V30.8152C2000 30.8152 1943.6 11.9519 1815.8 11.9519C1620.4 12.0538 1551.4 62.22 1468 62.22Z"
              fill="#003470"
            />
            <path
              d="M1532.2 23.0659C1132.2 -35.5633 1000.2 89.8522 742 42.9489C484 -4.56626 484 -0.895566 369.6 14.6029C256 30.1014 264.6 39.3801 179.8 47.1294C57.2 58.5493 0 -6.40161 0 -6.40161H2000C2000 -6.40161 1980.2 35.3016 1832.8 42.643C1685.4 49.9844 1659.2 41.5214 1532.2 23.0659Z"
              fill="#003470"
            />
          </svg>
        </div>

      {/* AS NOTÍCIAS VIA GRAPHQL */}
      <div className="mt-10 w-full py-10 px-16 mx-auto p-4">
        {/* Grid para 4 colunas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {data.posts.edges.map(({ node }) => (
            <div key={node.id} className="p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              {node.featuredImage && (
                <img
                  src={`/api/image-proxy?url=${encodeURIComponent(node.featuredImage.node.sourceUrl)}`}
                  alt={node.title}
                  className="w-full h-48 object-cover rounded"
                />
              )}
              <h2 className="text-2xl font-semibold mt-2">{node.title}</h2>
              {/* Exibe a data e a hora do post */}
              <p className="text-gray-500 text-sm mt-1">
                {new Date(node.date).toLocaleDateString("pt-BR")} | {new Date(node.date).toLocaleTimeString("pt-BR")}
              </p>
              <div
                className="text-gray-600 mt-2"
                dangerouslySetInnerHTML={{
                  __html: truncateText(node.excerpt, 30), // Limita a 30 palavras
                }}
              />
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
