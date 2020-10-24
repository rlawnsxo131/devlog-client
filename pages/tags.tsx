import * as React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_TAGS } from '../graphql/tag';
import { withApollo } from '../graphql/apollo';
import CountTags from '../components/tag/CountTags';
import Head from 'next/head';
import TagsSkelleton from '../components/tag/TagsSkelleton';
import ErrorPageWrapper from '../components/common/ErrorPageWrapper';
import { getErrorCode } from '../lib/utils';

type TagsProps = {};

function TagsPage(props: TagsProps) {
  const { loading, error, data } = useQuery(GET_TAGS);

  if (loading) return <TagsSkelleton />;
  if (error) {
    const code = getErrorCode(error);
    return <ErrorPageWrapper code={code} />;
  }

  return (
    <>
      <Head>
        <title>전체태그 - DevLog</title>
        <meta name="description" content="전체 태그목록" />
        <meta property="og:title" content="DevLog" />
        <meta property="og:description" content="전체 태그목록" />
        <meta
          property="og:url"
          content={`${process.env.DEVLOG_SERVICE_URL}/tags`}
        />
        <meta property="og:type" content="article" />
        <link rel="canonical" href={`${process.env.DEVLOG_SERVICE_URL}/tags`} />
      </Head>
      <CountTags tags={data.tags} />
    </>
  );
}

export default withApollo(TagsPage);
