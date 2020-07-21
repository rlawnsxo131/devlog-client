import * as React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import tagsRedirect from './hooks/tagsRedirect';

type CountTagProps = {
  tag: string;
  count: string;
};

function CountTag({ tag, count }: CountTagProps) {
  const { redirectTagPosts } = tagsRedirect({ tag });
  return (
    <Block onClick={redirectTagPosts}>
      <span>{tag}</span>
      <span className="count">{count}</span>
    </Block>
  );
}

const Block = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.25rem;
  padding: 0.25rem 0.5rem 0.25rem 0.5rem;
  color: ${palette.gray9};
  background: ${palette.gray1};
  border-radius: 1rem;

  .count {
    border-radius: 100%;
    background: ${palette.pink3};
    margin-left: 0.5rem;
    padding-left: 0.25rem;
    padding-right: 0.25rem;
    color: white;
    font-weight: bold;
  }

  &:hover {
    cursor: pointer;
    color: ${palette.pink3};
  }

  & + & {
    margin-left: 0.5rem;
  }
`;

export default CountTag;
