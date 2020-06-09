import * as React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_TAGS } from '../graphql/tag';
import { withApollo } from '../graphql/apollo';
import CountTags from '../components/tag/CountTags';

type TagsProps = {};

function Tags(props: TagsProps) {
  const { loading, error, data } = useQuery(GET_TAGS);

  if (loading) return <div>loading</div>;
  if (error) return <div>error</div>;

  return <CountTags tags={data.tags} />;
}

export default withApollo(Tags);
