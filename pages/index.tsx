import * as React from 'react';
import Layout from '../components/layout/Layout';
import withApollo from '../graphql/apollo';

type IndexProps = {};

function Index(props: IndexProps) {
  return <Layout />;
}

export default withApollo(Index);
