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
      {children}
    </Block>
  );
}

const Block = styled.div`
  display: flex;
  @import url('https://fonts.googleapis.com/css?family=Nanum+Gothic&display=swap');
  font-family: 'Nanum Gothic', sans-serif;
  ${media.xsmall} {
    padding-left: 0;
    flex-flow: column;
  }
  ${media.medium} {
    padding-left: 10vw;
    flex-flow: row;
  }
`;

export default Main;
