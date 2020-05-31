import * as React from 'react';
import styled from 'styled-components';
import CommentWrite from './CommentWrite';
import { useQuery } from '@apollo/react-hooks';
import { GET_COMMENTS } from '../../../graphql/comment';
import { useRouter } from 'next/dist/client/router';

type CommentsProps = {};

function Comments(props: CommentsProps) {
  const router = useRouter();
  const { loading, error, data } = useQuery(GET_COMMENTS, {
    variables: {
      post_id: router.query.id,
    },
  });
  if (loading) return <div>loading</div>;
  if (error) return <div>error</div>;

  console.log(data);

  return (
    <Block>
      <CommentWrite />
    </Block>
  );
}

const Block = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Comments;
