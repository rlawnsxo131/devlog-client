import * as React from 'react';
import PostCardSkelleton from './PostCardSkelleton';

type PostCardsSkelletonProps = {};

function PostCardsSkelleton(props: PostCardsSkelletonProps) {
  return (
    <>
      {[1, 2, 3, 4, 5].map((v, i) => (
        <PostCardSkelleton key={`postCard${i}`} />
      ))}
    </>
  );
}

export default PostCardsSkelleton;
