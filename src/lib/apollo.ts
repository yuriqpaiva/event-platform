import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4oajrqv1m6r01z2cf49albc/master',
  cache: new InMemoryCache(),
});
