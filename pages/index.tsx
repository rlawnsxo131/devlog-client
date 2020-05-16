import * as React from 'react';
import Layout from '../components/layout/Layout';
import withApollo from '../graphql/apollo';
import { useQuery } from '@apollo/react-hooks';
import { GET_POSTS } from '../graphql/post';

type IndexProps = {};

function Index(props: IndexProps) {
  const { loading, error, data } = useQuery(GET_POSTS, {
    variables: { all: true },
  });
  if (loading) return <div>loading</div>;
  if (error) return <div>error</div>;
  return (
    <>
      <Layout />
      {JSON.stringify(data)}
    </>
  );
}

export default withApollo(Index);
