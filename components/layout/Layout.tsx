import * as React from 'react';
import Header from './Header';
import Main from './Main';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

type LayoutProps = {};

function Layout(props: LayoutProps) {
  return (
    <Block>
      <GlobalStyle />
      <Header />
      <Main>
        <div>main content</div>
      </Main>
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
