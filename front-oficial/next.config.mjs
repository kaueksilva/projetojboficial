/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
  
    async rewrites() {
      return [
        {
          source: '/graphql', // A rota local para onde você faz as requisições
          destination: 'https://jaboatao.pe.gov.br/graphql', // A URL do servidor GraphQL
        },
      ];
    },
  };
  
  export default nextConfig;
  