import * as React from 'react';
import styled from 'styled-components';
import CommentWrite from './CommentWrite';
import { useQuery } from '@apollo/react-hooks';
import { GET_COMMENTS } from '../../../graphql/comment';
import { useRouter } from 'next/dist/client/router';
import CommentCards from './CommentCards';
import media from '../../../lib/styles/media';
import palette from '../../../lib/styles/palette';

type CommentsProps = {
  comments_count: number;
};

function Comments({ comments_count }: CommentsProps) {
  const router = useRouter();
  const { loading, error, data } = useQuery(GET_COMMENTS, {
    variables: {
      post_id: router.query.id,
    },
  });
  if (loading) return <div>loading</div>;
  if (error) return <div>error</div>;

  return (
    <Block>
      <div className="comment-count">{comments_count}개의 댓글</div>
      <CommentWrite />
      <CommentCards replies={data.comments} />
    </Block>
  );
}

const Block = styled.div`
  display: flex;
  flex-direction: column;

  .comment-count {
    font-weight: bold;
    color: ${palette.gray8};
    margin-bottom: 1rem;
    padding-left: 0.125rem;
    ${media.xsmall} {
      font-size: 0.875rem;
    }
    ${media.medium} {
      font-size: 1rem;
    }
  }
`;

export default Comments;
