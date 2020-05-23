import * as React from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';
import media from '../../lib/styles/media';

type MainProps = {
  children: React.ReactNode;
};

function Main({ children }: MainProps) {
  return (
    <Block>
      <Navigation />
      <div className="main-content">{children}</div>
    </Block>
  );
}

const Block = styled.main`
  display: flex;
  @import url('https://fonts.googleapis.com/css?family=Nanum+Gothic&display=swap');
  font-family: 'Nanum Gothic', sans-serif;
  ${media.xsmall} {
    padding-left: 0;
    padding-right: 0;
    flex-flow: column;
    .main-content {
      flex: 1;
    }
  }
  ${media.medium} {
    padding-left: 10vw;
    padding-right: 10vw;
    flex-flow: row;
    .main-content {
      flex: 4.5;
    }
  }
`;

export default Main;
