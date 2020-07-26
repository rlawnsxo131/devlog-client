import * as React from 'react';
import styled from 'styled-components';
import { useQuery } from '@apollo/react-hooks';
import { GET_SERIES, SeriesType } from '../../graphql/series';
import SeriesItem from './SeriesItem';

type SeriesProps = {};

const { memo } = React;
function Series(props: SeriesProps) {
  const { loading, error, data } = useQuery<{ series: Array<SeriesType> }>(
    GET_SERIES,
  );
  if (loading) return <div>loading</div>;
  if (error) return <div>error</div>;

  return (
    <Block>
      {data?.series.map((v, i) => (
        <SeriesItem key={v.series_name} series={v} />
      ))}
    </Block>
  );
}

const Block = styled.div`
  display: flex;
  flex-direction: column;
`;

export default memo(Series);
