import * as React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { useRouter } from 'next/dist/client/router';
import media from '../../lib/styles/media';

type MobileNavigationProps = {};

function MobileNavigation(props: MobileNavigationProps) {
  const router = useRouter();
  const routerValue = router.pathname.split('/')[1];
  return (
    <Block>
      <Link href="/">
        <StyledLink className={!routerValue.length ? 'active' : ''}>
          <h3>New</h3>
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
  ${media.xsmall} {
    justify-content: space-around;
    display: flex;
    flex-flow: row wrap;
    background: white;
    .active {
      color: ${palette.pink5};
    }
  }
  ${media.medium} {
    display: none;
  }
`;

const StyledLink = styled.a`
  display: flex;
  flex-flow: row wrap;
  color: ${palette.gray9};
  &:hover {
    cursor: pointer;
  }
  & + & {
    margin-left: 1rem;
  }
`;

export default MobileNavigation;
