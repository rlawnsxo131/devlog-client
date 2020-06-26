import * as React from 'react';
import Header from './Header';
import Main from './Main';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import ScrollTop from '../common/ScrollTop';
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
      {typeof window && <ScrollTop />}
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
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue',
    'Apple SD Gothic Neo', 'Malgun Gothic', '맑은 고딕', 나눔고딕,
    'Nanum Gothic', 'Noto Sans KR', 'Noto Sans CJK KR', arial, 돋움, Dotum,
    Tahoma, Geneva, sans-serif;
    -webkit-font-smoothing: antialiased;
  }
`;

export default Layout;
