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
          NEW
        </StyledLink>
      </Link>
      <Link href="/Tags">
        <StyledLink className={routerValue === 'Tags' ? 'active' : ''}>
          Tags
        </StyledLink>
      </Link>
      <Link href="/Info">
        <StyledLink className={routerValue === 'Info' ? 'active' : ''}>
          Info
        </StyledLink>
      </Link>
    </Block>
  );
}

const Block = styled.nav`
  display: flex;
  padding-bottom: 0.5rem;
  .active {
    border-bottom: 3px solid white;
    border-bottom: 3px solid ${palette.pink5};
    background: ${palette.pink0};
  }
`;

const StyledLink = styled.a`
  display: flex;
  align-items: center;
  padding: 0.725rem 1.125rem 0.725rem 1rem;
  font-size: 1.25rem;
  font-weight: bold;
  color: ${palette.gray8};
  &:hover {
    cursor: pointer;
  }
  border-bottom: 3px solid white;
`;

export default Navigation;
