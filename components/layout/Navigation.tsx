import * as React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { useRouter } from 'next/dist/client/router';
import media from '../../lib/styles/media';

type NavigationProps = {};

function Navigation(props: NavigationProps) {
  const router = useRouter();
  const routerValue = router.pathname.split('/')[1];
  return (
    <Block>
      <Link href="/">
        <CustomAnchor className={!routerValue.length ? 'active' : ''}>
          <h3>New</h3>
        </CustomAnchor>
      </Link>
      <Link href="/series">
        <CustomAnchor className={routerValue === 'series' ? 'active' : ''}>
          <h3>Series</h3>
        </CustomAnchor>
      </Link>
      <Link href="/tags">
        <CustomAnchor className={routerValue === 'tags' ? 'active' : ''}>
          <h3>Tags</h3>
        </CustomAnchor>
      </Link>
      <Link href="/info">
        <CustomAnchor className={routerValue === 'info' ? 'active' : ''}>
          <h3>Info</h3>
        </CustomAnchor>
      </Link>
    </Block>
  );
}

const Block = styled.nav`
  ${media.xsmall} {
    display: none;
  }
  ${media.medium} {
    display: flex;
    flex-flow: row wrap;
    .active {
      color: ${palette.pink5};
    }
  }
`;

const CustomAnchor = styled.a`
  display: flex;
  flex-flow: row wrap;
  padding: 0.25rem 0.7rem 0.25rem 0.7rem;
  color: ${palette.gray9};
  &:hover {
    cursor: pointer;
  }
  & + & {
    margin-left: 1.5rem;
  }
`;

export default Navigation;
