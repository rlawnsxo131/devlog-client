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
      <div className="main-content">
        <div className="mobile-navigation">
          <MobileNavigation />
        </div>
        {children}
      </div>
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
  }

  ${media.xsmall} {
    .mobile-navigation {
      display: flex;
      flex-flow: row wrap;
      margin-bottom: 1rem;
    }
  }

  ${media.medium} {
    align-items: center;
    .main-content {
      width: 48rem;
      margin-top: 3rem;
    }
    .mobile-navigation {
      display: none;
    }
  }

  ${media.large} {
    .main-content {
      width: 64rem;
    }
  }
`;

export default Main;
