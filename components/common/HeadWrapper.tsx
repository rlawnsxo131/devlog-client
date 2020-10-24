import * as React from 'react';
import Head from 'next/head';

type HeadWrapperProps = {
  title: string;
  description: string;
  url: string;
};

function HeadWrapper({ title, description, url }: HeadWrapperProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta
        property="og:image"
        content={`${process.env.PUBLIC_IMAGE_URL}/logo/devlog.png`}
      />
      <meta property="og:description" content={description} />
      <meta
        property="og:url"
        content={`${process.env.DEVLOG_SERVICE_URL}/${url}`}
      />
      <meta property="og:type" content="article" />
      <link rel="canonical" href={`${process.env.DEVLOG_SERVICE_URL}/${url}`} />
      <meta
        name="google-site-verification"
        content="cxSUqcooAfyS9ypQheVFaeT_mqAzuR_D8hjCLI5hP40"
      />
    </Head>
  );
}

export default HeadWrapper;
