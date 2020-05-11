import * as React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import client from '../graphql/client';

type _appProps = {
  Component: any;
  pageProps: any;
};

function _app({ Component, pageProps }: _appProps) {
  console.log(Component);
  console.log(pageProps);
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default _app;
