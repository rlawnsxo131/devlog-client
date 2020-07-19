import * as React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import media from '../../lib/styles/media';
import { useRouter } from 'next/dist/client/router';
import Navigation from './Navigation';

type HeaderProps = {};

const { useCallback } = React;
function Header(props: HeaderProps) {
  const router = useRouter();
  const redirectHome = useCallback(() => {
    router.push('/');
  }, []);
  return (
    <Block>
      <h1 onClick={redirectHome}>Development Log</h1>
      <div className="navigation">
        <Navigation />
      </div>
    </Block>
  );
}

const Block = styled.header`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  box-shadow: 1px 1px 10px 2px ${palette.gray1};
  padding-top: 1rem;
  padding-bottom: 1rem;
  h1 {
    &:hover {
      cursor: pointer;
    }
  }
  ${media.xsmall} {
    padding-left: 1rem;
    padding-right: 1rem;
    .navigation {
      display: none;
    }
  }
  ${media.medium} {
    padding-left: 3vw;
    padding-right: 20vw;
  }
  ${media.large} {
    .navigation {
      display: flex;
      flex-flow: row wrap;
    }
  }
`;

export default Header;
