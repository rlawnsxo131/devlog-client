import * as React from 'react';
import styled from 'styled-components';
import {
  Pharagraph,
  LengthPharagraph,
  BlockPharagraph,
} from '../common/Pharagraph';

type PostDetailSkelletonProps = {};

function PostDetailSkelleton(props: PostDetailSkelletonProps) {
  return (
    <Block>
      <div className="post-header">
        {[3, 5, 7, 5, 6].map((v, i) => (
          <Pharagraph key={`header${i}`} width={v} height={1.5} />
        ))}
      </div>
      <div className="tags">
        {[5, 4, 6].map((v, i) => (
          <Pharagraph key={`tags${i}`} width={v} height={1.25} />
        ))}
      </div>
      <div className="post-date">
        {[5, 2, 3].map((v, i) => (
          <Pharagraph key={`date${i}`} width={v} height={0.95} />
        ))}
      </div>
      <div className="short-description">
        {[5, 3, 4, 7, 4, 6].map((v, i) => (
          <Pharagraph key={`description${i}`} width={v} height={1} />
        ))}
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
