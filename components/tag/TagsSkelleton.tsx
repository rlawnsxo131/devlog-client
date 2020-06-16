import * as React from 'react';
import styled from 'styled-components';
import { Pharagraph } from '../common/Pharagraph';

type TagsSkelletonProps = {};

function TagsSkelleton(props: TagsSkelletonProps) {
  return (
    <Block>
      <div className="block">
        {[6, 5, 6, 4, 7, 5].map((v, i) => (
          <Pharagraph key={`tag1${i}`} width={v} height={1.5} />
        ))}
      </div>
      <div className="block">
        {[6, 4, 6, 4, 7, 5].map((v, i) => (
          <Pharagraph key={`tag2${i}`} width={v} height={1.5} />
        ))}
      </div>
      <div className="block">
        {[6, 5, 5, 4, 7, 5].map((v, i) => (
          <Pharagraph key={`tag3${i}`} width={v} height={1.5} />
        ))}
      </div>
      <div className="block">
        {[6, 5, 3, 4, 7, 5].map((v, i) => (
          <Pharagraph key={`tag4${i}`} width={v} height={1.5} />
        ))}
      </div>
      <div className="block">
        {[6, 5, 6, 4, 6, 5].map((v, i) => (
          <Pharagraph key={`tag5${i}`} width={v} height={1.5} />
        ))}
      </div>
    </Block>
  );
}

const Block = styled.div`
  display: flex;
  flex-flow: row wrap;
  .block {
    margin-bottom: 1rem;
  }
`;

export default TagsSkelleton;
