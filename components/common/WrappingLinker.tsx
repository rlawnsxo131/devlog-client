import * as React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

type WrappingLinkerProps = {
  href: string;
  children: React.ReactNode;
};

function WrappingLinker({ href, children }: WrappingLinkerProps) {
  return (
    <Link href={href}>
      <StyledLink>{children}</StyledLink>
    </Link>
  );
}

const StyledLink = styled.a`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: black;
`;

export default WrappingLinker;
