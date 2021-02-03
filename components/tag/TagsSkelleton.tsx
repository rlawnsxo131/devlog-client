import * as React from 'react';
import styled from 'styled-components';
import { Paragraph } from '../common/Paragraph';

type TagsSkelletonProps = {};

function Item() {
  return (
    <>
      {[6, 5, 6, 4, 6, 5, 3, 5, 6, 5].map((v, i) => (
        <Paragraph key={`tag${i}`} width={v} height={1.25} />
      ))}
    </>
  );
}

const { useRef } = React;
function TagsSkelleton(props: TagsSkelletonProps) {
  const array = useRef<Array<number>>(Array.from({ length: 30 }, (v, i) => i));
  return (
    <Block>
      {array.current.map((v, i) => (
        <Item key={i} />
      ))}
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
