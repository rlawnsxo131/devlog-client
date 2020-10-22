import Head from 'next/head';
import * as React from 'react';
import Custom404 from '../../pages/404';
import CustomError from '../../pages/_error';

type ErrorPageWrapperProps = {
  code: number;
};

function ErrorPageWrapper({ code }: ErrorPageWrapperProps) {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      {code === 404 ? <Custom404 /> : <CustomError statusCode={500} />}
    </>
  );
}

export default ErrorPageWrapper;
