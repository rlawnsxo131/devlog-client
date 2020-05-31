import * as React from 'react';
import styled from 'styled-components';
import CommentWrite from './CommentWrite';

type CommentsProps = {};

function Comments(props: CommentsProps) {
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
