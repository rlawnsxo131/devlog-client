import * as React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_TAGS } from '../graphql/tag';
import { withApollo } from '../graphql/apollo';
import CountTags from '../components/tag/CountTags';
import Head from 'next/head';

type TagsProps = {};

function TagsPage(props: TagsProps) {
  const { loading, error, data } = useQuery(GET_TAGS);

  if (loading) return <div>loading</div>;
  if (error) return <div>error</div>;

  return (
    <>
      <Head>
        <title>전체태그(Tags) - Development Log</title>
        <meta name="description" content="태그목록" />
      </Head>
      <CountTags tags={data.tags} />
    </>
  );
}

export default withApollo(TagsPage);
