import * as React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { useRouter } from 'next/dist/client/router';

type NavigationProps = {};

function Navigation(props: NavigationProps) {
  const router = useRouter();
  const routerValue = router.pathname.split('/')[1];
  return (
    <Block>
      <Link href="/">
        <StyledLink className={!routerValue.length ? 'active' : ''}>
          <h3>NEW</h3>
        </StyledLink>
      </Link>
      <Link href="/series">
        <StyledLink className={routerValue === 'series' ? 'active' : ''}>
          <h3>Series</h3>
        </StyledLink>
      </Link>
      <Link href="/tags">
        <StyledLink className={routerValue === 'tags' ? 'active' : ''}>
          <h3>Tags</h3>
        </StyledLink>
      </Link>
      <Link href="/info">
        <StyledLink className={routerValue === 'info' ? 'active' : ''}>
          <h3>Info</h3>
        </StyledLink>
      </Link>
    </Block>
  );
}

const Block = styled.nav`
  display: flex;
  flex-flow: row wrap;
  .active {
    color: ${palette.pink7};
  }
`;

const StyledLink = styled.a`
  display: flex;
  flex-flow: row wrap;
  color: ${palette.gray8};

  &:hover {
    cursor: pointer;
  }
  & + & {
    margin-left: 1.5rem;
  }
`;

export default Navigation;
