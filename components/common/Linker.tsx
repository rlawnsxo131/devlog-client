import * as React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Link from 'next/link';

type LinkerProps = {
  href: string;
  expression: string;
};

function Linker({ href, expression }: LinkerProps) {
  return (
    <Link href={href}>
      <StyledLink>
        <span>{expression}</span>
      </StyledLink>
    </Link>
  );
}

const StyledLink = styled.a`
  display: flex;
  flex-flow: row wrap;
  color: ${palette.pink7};
  font-weight: 600;
  &:hover {
    cursor: pointer;
    color: ${palette.pink5};
  }
  & + & {
    margin-top: 0.5rem;
  }
`;

export default Linker;
