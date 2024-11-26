import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://jaboatao.pe.gov.br/graphql', // URL do GraphQL
  cache: new InMemoryCache(),
});

export default client;
