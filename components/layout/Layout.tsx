import * as React from 'react';
import Header from './Header';
import Main from './Main';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import media from '../../lib/styles/media';

type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <Block>
      <GlobalStyle />
      <Header />
      <Main>{children}</Main>
    </Block>
  );
}

const Block = styled.div`
  display: flex;
  flex-direction: column;
  ${media.medium} {
    min-height: 100vh;
  }
`;

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue',
    'Apple SD Gothic Neo', 'Malgun Gothic', '맑은 고딕', 나눔고딕,
    'Nanum Gothic', 'Noto Sans KR', 'Noto Sans CJK KR', arial, 돋움, Dotum,
    Tahoma, Geneva, sans-serif;
    -webkit-font-smoothing: antialiased;
  }
  h1, h2, h3, h4, h5, h6 {
    all: unset;
  }
  a {
    all: unset;
  }

  ${media.xsmall} {
    h1 {
      font-weight: bold;
      font-size: 1.25rem;
    }
    h2 {
      font-weight: bold;
      font-size: 1.125rem;
    }
    h3 {
      font-weight: bold;
      font-size: 1rem;
    }
    span, p {
      font-size: 0.85rem;
    }
  }

  ${media.medium} {
    h1 {
      font-size: 1.5rem;
    }
    h2 {
      font-size: 1.25rem;
    }
    h3 {
      font-size: 1.125rem;
    }
    span, p {
      font-size: 0.875rem;
    }
  }

  ${media.large} {
    h1 {
      font-size: 1.725rem
    }
    h2 {
      font-size: 1.5rem;
    }
    h3 {
      font-size: 1.25rem;
    }
    span, p {
      font-size: 1rem;
    }
  }
`;

export default Layout;
