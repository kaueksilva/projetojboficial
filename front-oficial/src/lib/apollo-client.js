import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://jaboatao.pe.gov.br/graphql',
    fetchOptions: {
      timeout: 10000, // Tempo limite em milissegundos
    },
  }),
  cache: new InMemoryCache(),
});

export default client;
