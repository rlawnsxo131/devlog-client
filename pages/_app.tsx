import App from 'next/app';
import { NextComponentType } from 'next';
import { AppContext, AppInitialProps, AppProps } from 'next/app';
import { AppContextType } from 'next/dist/next-server/lib/utils';
import { Router, useRouter } from 'next/dist/client/router';
import Layout from '../components/layout/Layout';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import 'highlight.js/styles/atom-one-light.css';
import { useEffect } from 'react';
import * as gtag from '../lib/gtag';

const MyApp: NextComponentType<AppContext, AppInitialProps, AppProps> = ({
  Component,
  pageProps,
}) => {
  const router = useRouter();
  const prod = process.env.NODE_ENV === 'production';

  useEffect(() => {
    if (!prod) return;
    const handleRouteChange = (url: URL) => {
      gtag.pageView(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

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
