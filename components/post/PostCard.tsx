import * as React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import DefaultTags from '../tag/DefaultTags';
import { PostType } from '../../graphql/post';
import { formatDate } from '../../lib/utils';
import { useRouter } from 'next/dist/client/router';

type PostCardProps = {
  post: PostType;
};

const { useCallback } = React;
function PostCard({ post }: PostCardProps) {
  const router = useRouter();
  const redirectPostDetail = useCallback(() => {
    router.push(
      `/post/[title]/?id=${post.id}`,
      `/post/${post.post_header}/?id=${post.id}`,
    );
  }, []);
  return (
    <Block onClick={redirectPostDetail}>
      <div className="post-title">
        <h3>{post.post_header}</h3>
      </div>
      <div className="short-description">{post.short_description}</div>
      <div className="tag">
        <DefaultTags tags={post.tags} />
      </div>
      <div className="post-date">
        <span>작성: {formatDate(post.created_at)}</span>
        <span>수정: {formatDate(post.updated_at)}</span>
      </div>
    </Block>
  );
}

const Block = styled.div`
  display: flex;
  flex-direction: column;
  height: 14rem;
  margin-bottom: 1rem;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 1px 1px 10px 2px ${palette.gray1};
  overflow: auto;

  .post-title {
    h3 {
      all: unset;
    }
    display: flex;
    flex-flow: row wrap;
    font-size: 1.5rem;
    font-weight: bold;
    color: ${palette.pink7};
    margin-bottom: 1.5rem;
  }

  .short-description {
    display: flex;
    flex-flow: row wrap;
    font-size: 1rem;
    font-weight: bold;
    line-height: 1.5rem;
    margin-bottom: 2rem;
  }

  .tag {
    margin-bottom: 1.5rem;
  }

  .post-date {
    display: flex;
    flex-direction: column;
    font-size: 1rem;
    span {
      margin-bottom: 0.5rem;
    }
  }

  &:hover {
    cursor: pointer;
    box-shadow: 1px 1px 10px 2px ${palette.gray3};
  }
`;

export default PostCard;
