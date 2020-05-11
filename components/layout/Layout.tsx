import * as React from 'react';
import Header from './Header';
import Main from './Main';

type LayoutProps = {};

function Layout(props: LayoutProps) {
  return (
    <div>
      <Header />
      <Main />
    </div>
  );
}

export default Layout;
