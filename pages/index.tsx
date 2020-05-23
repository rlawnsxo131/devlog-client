import * as React from 'react';
import { withApollo } from '../graphql/apollo';

type IndexProps = {};

function Index(props: IndexProps) {
  return <div>content</div>;
}

export default withApollo(Index);
