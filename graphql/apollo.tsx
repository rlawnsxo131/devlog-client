import React from 'react';
import Head from 'next/head';
import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import fetch from 'node-fetch';
import { NextPage } from 'next';
import { ApolloLink } from 'apollo-link';

// CreateHttpLink
function initHttpLink(headers: { cookie?: string } | undefined): ApolloLink {
  const graphqlURI = 'http://localhost:3001/graphql';
  let httpLink: ApolloLink;
  if (typeof window === 'undefined') {
    httpLink = createHttpLink({
      uri: graphqlURI,
      credentials: 'include',
      fetch: fetch as any,
      headers,
    });
  } else {
    httpLink = createHttpLink({
      uri: graphqlURI,
      credentials: 'include',
      headers,
    });
  }
  return httpLink;
}

// Create ApolloClient
function createApolloClient(
  initialState: NormalizedCacheObject = {},
  cookie?: string,
): ApolloClient<NormalizedCacheObject> {
  const headers = cookie ? { cookie } : undefined;
  const link = initHttpLink(headers);
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link,
    cache: new InMemoryCache().restore(initialState),
  });
}

let apolloClient: ApolloClient<NormalizedCacheObject> | null = null;

// Initialize Apollo Client
function initApolloClient(initialState?: NormalizedCacheObject) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (typeof window === 'undefined') {
    return createApolloClient(initialState);
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = createApolloClient(initialState);
  }

  return apolloClient;
}

export function withApollo<PageProps>(
  PageComponent: NextPage<PageProps>,
  { ssr = true } = {},
) {
  type ApolloPageProps = PageProps & {
    apolloClient?: ApolloClient<NormalizedCacheObject> | null;
    apolloState?: NormalizedCacheObject;
  };
  const WithApollo: NextPage<ApolloPageProps> = ({
    apolloClient,
    apolloState,
    ...pageProps
  }) => {
    const client = apolloClient || initApolloClient(apolloState);
    return (
      <ApolloProvider client={client}>
        <PageComponent {...((pageProps as any) as PageProps)} />
      </ApolloProvider>
    );
  };

  // Set the correct displayName in development
  if (process.env.NODE_ENV !== 'production') {
    const displayName =
      PageComponent.displayName || PageComponent.name || 'Component';

    if (displayName === 'App') {
      console.warn('This withApollo HOC only works with PageComponents.');
    }

    WithApollo.displayName = `withApollo(${displayName})`;
  }

  if (ssr || PageComponent.getInitialProps) {
    WithApollo.getInitialProps = async (ctx: any) => {
      const { AppTree } = ctx;

      // Initialize ApolloClient, add it to the ctx object so
      // we can use it in `PageComponent.getInitialProp`.
      const apolloClient = (ctx.apolloClient = initApolloClient({}));

      // Run wrapped getInitialProps methods
      let pageProps = {} as PageProps;
      if (PageComponent.getInitialProps) {
        pageProps = await PageComponent.getInitialProps(ctx);
      }

      // Only on the server:
      if (typeof window === 'undefined') {
        // When redirecting, the response is finished.
        // No point in continuing to render
        if (ctx.res && ctx.res.finished) {
          return pageProps;
        }

        // Only if ssr is enabled
        if (ssr) {
          try {
            // Run all GraphQL queries
            const { getDataFromTree } = await import('@apollo/react-ssr');
            await getDataFromTree(
              <AppTree
                pageProps={{
                  ...pageProps,
                  apolloClient,
                }}
              />,
            );
          } catch (error) {
            // Prevent Apollo Client GraphQL errors from crashing SSR.
            // Handle them in components via the data.error prop:
            // https://www.apollographql.com/docs/react/api/react-apollo.html#graphql-query-data-error
            console.error('Error while running `getDataFromTree`', error);
          }

          // getDataFromTree does not call componentWillUnmount
          // head side effect therefore need to be cleared manually
          Head.rewind();
        }
      }

      // Extract query data from the Apollo store
      const apolloState = apolloClient.cache.extract();

      return {
        ...pageProps,
        apolloState,
      };
    };
  }

  return WithApollo;
}
