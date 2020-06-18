import App from 'next/app';
import { NextComponentType } from 'next';
import { AppContext, AppInitialProps, AppProps } from 'next/app';
import { AppContextType } from 'next/dist/next-server/lib/utils';
import { Router } from 'next/dist/client/router';
import Layout from '../components/layout/Layout';
import '@toast-ui/editor/dist/toastui-editor.css';
import 'highlight.js/styles/atom-one-light.css';
import 'codemirror/lib/codemirror.css';

const MyApp: NextComponentType<AppContext, AppInitialProps, AppProps> = ({
  Component,
  pageProps,
}) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

MyApp.getInitialProps = async (appContext: AppContextType<Router>) => {
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps };
};

export default MyApp;
