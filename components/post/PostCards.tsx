import * as React from 'react';
import styled from 'styled-components';
import PostCard from './PostCard';
import { useRouter } from 'next/dist/client/router';
import { GET_POSTS, PostType } from '../../graphql/post';
import { useQuery } from '@apollo/react-hooks';
import media from '../../lib/styles/media';

type PostCardsProps = {};

function PostCards(props: PostCardsProps) {
  const router = useRouter();
  const { loading, error, data } = useQuery(GET_POSTS, {
    variables: {
      tag: router.query.tag,
      all: false,
    },
  });

  if (loading) return <div>loading</div>;
  if (error) return <div>error</div>;

  return (
    <Block>
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

export default PostCards;
