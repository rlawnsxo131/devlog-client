import * as React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Link from 'next/link';

type LinkerProps = {
  href: string;
  expression: string;
  color?: string;
  hoverColor?: string;
};

function Linker({
  href,
  expression,
  color = `${palette.pink7}`,
  hoverColor = `${palette.pink3}`,
}: LinkerProps) {
  return (
    <Link href={href}>
      <StyledLink color={color} hoverColor={hoverColor}>
        <span>{expression}</span>
      </StyledLink>
    </Link>
  );
}

const StyledLink = styled.a<{ color: string; hoverColor: string }>`
  display: flex;
  flex-flow: row wrap;
  color: ${(props) => props.color};
  font-weight: 600;
  &:hover {
    cursor: pointer;
    color: ${(props) => props.hoverColor};
  }
  & + & {
    margin-top: 0.725rem;
  }
`;

export default Linker;
