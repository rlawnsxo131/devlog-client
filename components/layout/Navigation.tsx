import * as React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import media from '../../lib/styles/media';

type NavigationProps = {};

function Navigation(props: NavigationProps) {
  return (
    <Block>
      <Link href="/">
        <StyledLink>NEW</StyledLink>
      </Link>
      <Link href="/">
        <StyledLink>TagList</StyledLink>
      </Link>
      <Link href="/">
        <StyledLink>Info</StyledLink>
      </Link>
    </Block>
  );
}

const Block = styled.div`
  display: flex;
  ${media.xsmall} {
    flex-flow: row wrap;
  }
  ${media.medium} {
    flex-direction: column;
  }
`;

const StyledLink = styled.a`
  color: red;
  display: flex;
  align-items: center;
  padding: 0.725rem 1.125rem 0.725rem 1rem;
  font-size: 1.25rem;
  font-weight: bold;
  color: ${palette.gray8};
  border-left: 3px solid white;
  &:hover {
    cursor: pointer;
    border-left: 3px solid ${palette.pink5};
    background-color: ${palette.pink0};
  }
`;

export default Navigation;
