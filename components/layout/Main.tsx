import * as React from 'react';
import styled from 'styled-components';
import media from '../../lib/styles/media';
import MobileNavigation from './MobileNavigation';

type MainProps = {
  children: React.ReactNode;
};

function Main({ children }: MainProps) {
  return (
    <Block>
      <div className="main-content">{children}</div>
    </Block>
  );
}

const Block = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-left: 3vw;
  padding-right: 3vw;

  .main-content {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  ${media.xsmall} {
    margin-top: 5.5rem;
    .main-content {
      margin-top: 2rem;
    }
  }

  ${media.medium} {
    margin-top: 3.75rem;
    align-items: center;
    .main-content {
      margin-top: 3rem;
      width: 48rem;
    }
  }

  ${media.large} {
    .main-content {
      width: 64rem;
    }
  }
`;

export default Main;
