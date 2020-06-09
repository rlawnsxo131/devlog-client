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
      <div className="fake-navigation"></div>
    </Block>
  );
}

const Block = styled.main`
  display: flex;

  ${media.xsmall} {
    flex-direction: column;
    padding-left: 3vw;
    padding-right: 3vw;
    .main-content {
      flex: 1;
    }
    .fake-navigation {
      display: none;
    }
  }
  ${media.medium} {
    flex-direction: row;
    padding-top: 1rem;
    padding-left: 10vw;
    padding-right: 10vw;
    .main-content {
      flex: 4.5;
    }
    .fake-navigation {
      display: flex;
      flex: 1;
    }
  }
`;

export default Main;
