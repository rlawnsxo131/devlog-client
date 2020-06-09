import * as React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import media from '../../lib/styles/media';
import { useRouter } from 'next/dist/client/router';

type HeaderProps = {};

const { useCallback } = React;
function Header(props: HeaderProps) {
  const router = useRouter();
  const redirectHome = useCallback(() => {
    router.push('/');
  }, []);
  return (
    <Block onClick={redirectHome}>
      <h1>Development Log</h1>
    </Block>
  );
}

const Block = styled.div`
  display: flex;
  box-shadow: 1px 1px 10px 2px ${palette.gray1};
  h1 {
    font-size: 1.8rem;
    &:hover {
      cursor: pointer;
    }
  }
  ${media.xsmall} {
    padding-left: 3vw;
  }
  ${media.medium} {
    padding-left: 10vw;
  }
`;

export default Header;
