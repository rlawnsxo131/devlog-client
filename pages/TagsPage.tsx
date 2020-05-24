import * as React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_TAGS } from '../graphql/tag';
import { withApollo } from '../graphql/apollo';
import styled from 'styled-components';
import RedirectTags from '../components/tag/RedirectTags';

type TagProps = {};

function TagsPage(props: TagProps) {
  const { loading, error, data } = useQuery(GET_TAGS);

  if (loading) return <div>loading</div>;
  if (error) return <div>error</div>;

  return (
    <Block>
      <RedirectTags tags={data.tags} />
    </Block>
  );
}

const Block = styled.div`
  padding: 1rem;
`;

export default withApollo(TagsPage);
