import * as React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import apollo from '../graphql/client';
import ApolloClient from 'apollo-client';
import { NormalizedCacheObject } from 'apollo-cache-inmemory';

type _appProps = {
  Component: any;
  pageProps: any;
};

function _app({ Component, pageProps }: _appProps) {
  let client: ApolloClient<NormalizedCacheObject> | any = undefined;
  client = apollo();

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default _app;
