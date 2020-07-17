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
  flex: 1;
  display: flex;
  .main-content {
    flex: 1;
  }
  ${media.xsmall} {
    flex-direction: column;
    padding-left: 3vw;
    padding-right: 3vw;
  }
  ${media.medium} {
    flex-direction: row;
    padding-top: 1rem;
    padding-left: 10vw;
    padding-right: 10vw;
  }
`;

export default Main;
