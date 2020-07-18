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
      {/* <Navigation /> */}
      <div className="main-content">{children}</div>
    </Block>
  );
}

const Block = styled.main`
  display: flex;
  flex-direction: column;
  padding-left: 3vw;
  padding-right: 3vw;

  .main-content {
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
  }

  ${media.medium} {
    align-items: center;
    .main-content {
      width: 768px;
    }
  }
`;

export default Main;
