import * as React from 'react';
import PostDetail from '../../components/post/PostDetail';
import { withApollo } from '../../graphql/apollo';

type PostDetailProps = {};

function PostDetailPage(props: PostDetailProps) {
  return <PostDetail />;
}

export default withApollo(PostDetailPage);
