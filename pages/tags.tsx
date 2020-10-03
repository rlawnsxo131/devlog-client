import * as React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_TAGS } from '../graphql/tag';
import { withApollo } from '../graphql/apollo';
import CountTags from '../components/tag/CountTags';
import Head from 'next/head';
import TagsSkelleton from '../components/tag/TagsSkelleton';

type TagsProps = {};

function TagsPage(props: TagsProps) {
  const { loading, error, data } = useQuery(GET_TAGS);

  if (loading) return <TagsSkelleton />;
  if (error) return <div>error</div>;

  return (
    <>
      <Head>
        <title>전체태그 - DevLog(test)</title>
        <meta name="description" content="태그목록" />
        <meta property="og:title" content="DevLog" />
        <meta property="og:description" content="Devlog 전체 태그목록" />
        <meta property="og:url" content="https://devlog.juntae.kim/tags" />1
        <meta property="og:type" content="article" />
      </Head>
      <CountTags tags={data.tags} />
    </>
  );
}

export default withApollo(TagsPage);
