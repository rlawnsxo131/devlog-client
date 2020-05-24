import * as React from 'react';
import PostCards from '../../components/post/PostCards';
import { withApollo } from '../../graphql/apollo';

type IndexTagProps = {};

function IndexTagPage(props: IndexTagProps) {
  return <PostCards />;
}

export default withApollo(IndexTagPage);
