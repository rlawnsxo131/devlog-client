import * as React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

type DefaultTagProps = {
  tag: string;
};

function DefaultTag({ tag }: DefaultTagProps) {
  return (
    <Link href={`/posts/${tag}`}>
      <StyledLink>
        <span>{tag}</span>
      </StyledLink>
    </Link>
  );
}

const StyledLink = styled.a`
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
