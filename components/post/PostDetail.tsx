import * as React from 'react';
import { useRouter } from 'next/dist/client/router';
import { useQuery } from '@apollo/react-hooks';
import { GET_POST } from '../../graphql/post';
import styled from 'styled-components';
import { formatDate } from '../../lib/utils';

type PostDetailProps = {};

function PostDetail(props: PostDetailProps) {
  const router = useRouter();
  if (!router.query.id) return <div>not found id</div>;
  const { loading, error, data } = useQuery(GET_POST, {
    variables: {
      id: router.query.id,
    },
  });

  if (loading) return <div>loading</div>;
  if (error) return <div>error</div>;

  console.log(data?.post);

  return (
    <Block>
      <div className="post-header">
        <h2>{data.post.post_header}</h2>
      </div>
      <div className="post-date">
        <span>작성: {formatDate(data.post.created_at)}</span>
        <span>수정: {formatDate(data.post.updated_at)}</span>
      </div>
      <div className="short-description">{data.post.short_description}</div>
      <div className="tags">{data.post.tags}</div>
      <div className="post-body">{data.post.post_body}</div>
    </Block>
  );
}

const Block = styled.div`
  display: flex;
  flex-direction: column;
`;

export default PostDetail;
