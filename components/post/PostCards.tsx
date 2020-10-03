import * as React from 'react';
import styled from 'styled-components';
import PostCard from './PostCard';
import { useRouter } from 'next/dist/client/router';
import { GET_POSTS, PostType } from '../../graphql/post';
import { useQuery } from '@apollo/react-hooks';
import Head from 'next/head';
import PostCardsSkelleton from './PostCardsSkelleton';

type PostCardsProps = {};

const { memo } = React;
function PostCards(props: PostCardsProps) {
  const { query } = useRouter();
  const { loading, error, data } = useQuery(GET_POSTS, {
    variables: {
      tag: query.tag,
    },
  });

  if (loading) return <PostCardsSkelleton />;
  if (error) return <div>error</div>;

  return (
    <Block>
      <Head>
        <title>Development Log {query.tag ? ` - ${query.tag}` : ''}</title>
        <meta
          name="description"
          content={query.tag ? `${query.tag}에 관한 글목록` : '전체 글목록'}
        />
        <meta property="og:url" content="https://devlog.juntae.kim" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content={`Development Log ${query.tag ? ` - ${query.tag}` : ''}`}
        />
      </Head>
      {data.posts.map((val: PostType, idx: number) => (
        <PostCard key={`${val.id}${idx}`} post={val} />
      ))}
    </Block>
  );
}

const Block = styled.div`
  display: flex;
  flex-direction: column;
`;

export default memo(PostCards);
