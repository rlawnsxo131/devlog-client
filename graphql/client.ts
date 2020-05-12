import { ApolloClient } from 'apollo-client';
import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import fetch from 'node-fetch';

const graphqlURI = 'http://localhost:3001/graphql';

const httpLink = createHttpLink({
  uri: graphqlURI,
  credentials: 'include',
  fetch: fetch as any,
});

const apollo = (initialState?: any): ApolloClient<NormalizedCacheObject> => {
  const client = new ApolloClient<NormalizedCacheObject>({
    ssrMode: true,
    link: httpLink,
    cache: new InMemoryCache().restore(initialState || {}),
  });
  return client;
};

export default apollo;
