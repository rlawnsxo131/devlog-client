import * as React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

type DefaultTagProps = {
  name: string;
};

function DefaultTag({ name }: DefaultTagProps) {
  return <Block>{name}</Block>;
}

const Block = styled.div`
  padding: 0.25rem 0.5rem 0.25rem 0.5rem;
  background-color: ${palette.gray1};
  border-radius: 1rem;
  & + & {
    margin-left: 0.5rem;
  }
`;

export default DefaultTag;
