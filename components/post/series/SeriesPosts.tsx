import * as React from 'react';
import styled, { css } from 'styled-components';
import { SeriesPostType } from '../../../graphql/post';
import palette from '../../../lib/styles/palette';
import Linker from '../../common/Linker';
import { useRouter } from 'next/dist/client/router';

type SeriesPostsProps = {
  series_posts: Array<SeriesPostType>;
};

function SeriesPosts({ series_posts }: SeriesPostsProps) {
  if (!series_posts.length) return null;
  const { query } = useRouter();
  return (
    <Block>
      <p>이 시리즈 더보기</p>
      <div className="series-post-list">
        <h3>{series_posts[0].series_name}</h3>
        {series_posts.map((v, i) => (
          <Background
            key={`series_post${i}`}
            query_id={Number(query.id)}
            post_id={Number(v.post_id)}
          >
            <Linker
              href={`/post/${v.post_header}?id=${v.post_id}`}
              expression={v.post_header}
            />
          </Background>
        ))}
      </div>
    </Block>
  );
}

const Block = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem 1rem 1.5rem 1rem;
  border: 1px solid ${palette.gray3};
  border-radius: 0.25rem;
  p {
    margin-bottom: 0.25rem;
    font-weight: 500;
    color: ${palette.gray6};
  }
  .series-post-list {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const Background = styled.div<{ query_id: number; post_id: number }>`
  margin-top: 0.25rem;
  padding-left: 0.5rem;
  ${(props) =>
    props.query_id === props.post_id &&
    css`
      background: ${palette.pink0};
    `}
`;

export default SeriesPosts;
