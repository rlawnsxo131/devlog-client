import * as React from 'react';
import styled from 'styled-components';
import { LengthPharagraph, BlockPharagraph } from '../common/Pharagraph';

type PostDetailSkelletonProps = {};

function PostDetailSkelleton(props: PostDetailSkelletonProps) {
  return (
    <Block>
      <div className="thumnail">
        <BlockPharagraph height={20} />
      </div>
      <div className="post-body">
        <LengthPharagraph length={250} />
      </div>
      <div className="comment-write">
        <BlockPharagraph height={7.5} />
      </div>
    </Block>
  );
}

const Block = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 10vh;

  .post-header {
    margin-top: 0.5rem;
    margin-bottom: 1rem;
  }

  .tags {
    margin-bottom: 1rem;
  }

  .post-date {
    display: flex;
    flex-flow: row wrap;
    margin-bottom: 1rem;
  }

  .short-description {
    margin-bottom: 1rem;
  }

  .post-body {
    margin-bottom: 1rem;
  }
`;

export default PostDetailSkelleton;
