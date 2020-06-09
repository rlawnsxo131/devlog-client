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
      {tag}
      <span className="count">{count}</span>
    </Block>
  );
}

const Block = styled.div`
  padding: 0.25rem 0.5rem 0.25rem 0.5rem;
  color: ${palette.gray9};
  background-color: ${palette.gray1};
  border-radius: 1rem;

  .count {
    border-radius: 100%;
    background-color: ${palette.pink3};
    margin-left: 0.5rem;
    padding-left: 0.25rem;
    padding-right: 0.25rem;
    color: white;
    font-size: 1rem;
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
