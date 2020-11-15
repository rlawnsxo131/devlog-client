import * as React from 'react';
import Head from 'next/head';

type HeadWrapperProps = {
  title: string;
  description: string;
  url: string;
  thumnail?: string;
};

function HeadWrapper({ title, description, url, thumnail }: HeadWrapperProps) {
  const ogImage = thumnail
    ? thumnail
    : `${process.env.PUBLIC_IMAGE_URL}/logo/devlog.png`;
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content={description ? description : '김준태 블로그(DevLog)'}
      />
      <meta property="og:title" content={title} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="800" />
      <meta property="og:image:height" content="400" />
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
