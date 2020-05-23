import * as React from 'react';
import Header from './Header';
import Main from './Main';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

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
`;

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export default Layout;
