import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from '@apollo/react-hooks';
import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import fetch from 'node-fetch';
import { ApolloLink } from 'apollo-link';
import { NextPage, NextPageContext } from 'next';
import { getDataFromTree } from '@apollo/react-ssr';

const graphqlURI = 'http://localhost:3001/graphql';

// Create ApolloLink
function initHttpLink(): ApolloLink {
  let httpLink: ApolloLink;
  if (typeof window === 'undefined') {
    httpLink = createHttpLink({
      uri: graphqlURI,
      credentials: 'include',
      fetch: fetch as any,
    });
  } else {
    httpLink = createHttpLink({
      uri: graphqlURI,
      credentials: 'include',
    });
  }
  return httpLink;
}

// Create ApolloClinet
function initApolloClient(
  initialState?: any,
): ApolloClient<NormalizedCacheObject> {
  const ssrMode = typeof window === 'undefined' ? true : false;
  const client = new ApolloClient({
    ssrMode: ssrMode,
    link: initHttpLink(),
    cache: new InMemoryCache().restore(initialState || {}),
  });
  return client;
}

// with Apollo
function withApollo(PageComponent: NextPage) {
  const WithApollo = ({ apolloState }: { apolloState: any }) => {
    const client = initApolloClient(apolloState);
    return (
      <ApolloProvider client={client}>
        <PageComponent />
      </ApolloProvider>
    );
  };

  if (typeof window === 'undefined') {
    console.log('server');
    WithApollo.getInitialProps = async (ctx: NextPageContext) => {
      const client = initApolloClient();
      const Root = (
        <ApolloProvider client={client}>
          <PageComponent />
        </ApolloProvider>
      );
      try {
        await getDataFromTree(Root);
      } catch (e) {
        console.error('getDataTextFromTree erorr', e);
      }
      const apolloState = client.extract();
      return {
        apolloState,
      };
    };
  }

  return WithApollo;
}

export default withApollo;
