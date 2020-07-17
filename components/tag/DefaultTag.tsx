import * as React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import tagsRedirect from './hooks/tagsRedirect';

type DefaultTagProps = {
  tag: string;
};

function DefaultTag({ tag }: DefaultTagProps) {
  const { redirectTagPosts } = tagsRedirect({ tag });
  return (
    <Block onClick={redirectTagPosts}>
      <span>{tag}</span>
    </Block>
  );
}

const Block = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.25rem 0.5rem 0.25rem 0.5rem;
  color: ${palette.gray9};
  background: ${palette.gray1};
  border-radius: 1rem;

  &:hover {
    cursor: pointer;
    color: ${palette.pink3};
  }

  & + & {
    margin-left: 0.5rem;
  }
`;

export default DefaultTag;
