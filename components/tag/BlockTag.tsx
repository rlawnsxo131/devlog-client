import * as React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { useRouter } from 'next/dist/client/router';

type BlockTagProps = {
  tag: string;
  count: string;
};

const { useCallback } = React;
function BlockTag({ tag, count }: BlockTagProps) {
  const router = useRouter();
  const handleClick = useCallback(() => {
    router.push(`/[tag]`, `/${tag}`);
  }, []);
  return (
    <Block onClick={handleClick}>
      {tag}
      <span className="count">{count}</span>
    </Block>
  );
}

const Block = styled.div`
  padding: 0.25rem 0.5rem 0.25rem 0.5rem;
  background-color: ${palette.gray1};
  border-radius: 1rem;
  .count {
    border-radius: 100%;
    background-color: ${palette.teal5};
    margin-left: 0.5rem;
    padding-left: 0.25rem;
    padding-right: 0.25rem;
    color: white;
    font-size: 1rem;
    font-weight: bold;
  }
  &:hover {
    cursor: pointer;
    color: ${palette.teal5};
  }
  & + & {
    margin-left: 0.5rem;
  }
`;

export default BlockTag;
