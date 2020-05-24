import * as React from 'react';
import { withApollo } from '../graphql/apollo';
import PostCards from '../components/post/PostCards';

type IndexProps = {};

function IndexPage(props: IndexProps) {
  return <PostCards />;
}

export default withApollo(IndexPage);
