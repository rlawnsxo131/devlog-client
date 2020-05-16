import * as React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import media from '../../lib/styles/media';

type HeaderProps = {};

function Header(props: HeaderProps) {
  return (
    <Block>
      <h1>Development Log</h1>
    </Block>
  );
}

const Block = styled.div`
  display: flex;
  box-shadow: 1px 1px 10px 2px ${palette.gray1};
  h1 {
    @import url('https://fonts.googleapis.com/css?family=Candal&display=swap');
    font-family: 'Candal', sans-serif;
    font-size: 1.8rem;
    &:hover {
      cursor: pointer;
    }
  }
  ${media.xsmall} {
    padding-left: 7vw;
  }
  ${media.medium} {
    padding-left: 10vw;
  }
`;

export default Header;
