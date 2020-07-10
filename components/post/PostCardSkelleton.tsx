import * as React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { Pharagraph, LengthPharagraph } from '../common/Pharagraph';

type PostCardSkelletonProps = {};

function PostCardSkelleton(props: PostCardSkelletonProps) {
  return (
    <Block>
      <div className="post-title">
        {[3, 5, 4, 2, 5].map((v, i) => (
          <Pharagraph key={`title_${i}`} width={v} height={1.5} />
        ))}
      </div>
      <div className="short-description">
        {[5, 3, 2, 7, 4, 3].map((v, i) => (
          <Pharagraph key={`description${i}`} width={v} height={1} />
        ))}
      </div>
      <div className="tag">
        {[7, 5, 6].map((v, i) => (
          <Pharagraph key={`tag${i}`} width={v} height={1.25} />
        ))}
      </div>
      <div>
        <LengthPharagraph length={12} />
      </div>
    </Block>
  );
}

const Block = styled.div`
  display: flex;
  flex-direction: column;
  height: 14rem;
  margin-bottom: 1rem;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 1px 1px 10px 2px ${palette.gray1};
  overflow: auto;

  .post-title {
    display: flex;
    flex-flow: row wrap;
    font-weight: bold;
    margin-bottom: 1.5rem;
  }

  .short-description {
    display: flex;
    flex-flow: row wrap;
    font-weight: bold;
    line-height: 1.5rem;
    margin-bottom: 2rem;
  }

  .tag {
    margin-bottom: 1.5rem;
  }

  .post-date {
    display: flex;
    margin-bottom: 0.5rem;
  }
`;

export default PostCardSkelleton;
