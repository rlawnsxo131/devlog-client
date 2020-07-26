import * as React from 'react';
import Series from '../components/series/Series';
import { withApollo } from '../graphql/apollo';

type SeriesPageProps = {};

function SeriesPage(props: SeriesPageProps) {
  return <Series />;
}

export default withApollo(SeriesPage);
