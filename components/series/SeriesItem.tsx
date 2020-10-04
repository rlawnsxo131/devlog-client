import * as React from 'react';
import { SeriesType } from '../../graphql/series';
import styled from 'styled-components';
import Linker from '../common/Linker';

type SeriesItemProps = {
  series: SeriesType;
};

const { memo } = React;
function SeriesItem({ series }: SeriesItemProps) {
  return (
    <Block>
      <h3>{series.series_name}</h3>
      <div className="posts">
        {series.posts.map((v, i) => (
          <Linker
            key={`series_post${i}`}
            href={`/post/${v.post_header}/?id=${v.id}`}
            expression={v.post_header}
          />
        ))}
      </div>
    </Block>
  );
}

const Block = styled.div`
  display: flex;
  flex-direction: column;
  .posts {
    margin-top: 0.5rem;
    margin-left: 1.5rem;
  }
  & + & {
    margin-top: 1rem;
  }
`;

export default memo(SeriesItem);
