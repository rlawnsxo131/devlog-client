import * as React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import DefaultTags from '../tag/DefaultTags';
import { PostType } from '../../graphql/post';
import { formatDate } from '../../lib/utils';

import Link from 'next/link';

type PostCardProps = {
  post: PostType;
};

const { memo } = React;
function PostCard({ post }: PostCardProps) {
  return (
    <Link
      href={{
        pathname: `/post/${post.post_header}`,
        query: { id: post.id },
      }}
    >
      <CustomAnchor>
        <div className="post-header">
          <h2>{post.post_header}</h2>
          {post.series_id ? <span>series</span> : null}
        </div>
        <div className="short-description">
          <span>{post.short_description}</span>
        </div>
        <div className="tag">
          <DefaultTags tags={post.tags} />
        </div>
        <div className="post-date">
          <span>{formatDate(post.released_at)}</span>
        </div>
      </CustomAnchor>
    </Link>
  );
}

const CustomAnchor = styled.a`
  display: flex;
  flex-direction: column;
  height: 12rem;
  margin-bottom: 1rem;
  padding: 2rem;
  border-radius: 0.25rem;
  box-shadow: 1px 1px 10px 2px ${palette.gray1};
  overflow: auto;

  .post-header {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    color: ${palette.pink7};
    margin-bottom: 1.5rem;
    span {
      font-weight: bold;
      color: ${palette.teal5};
    }
  }

  .short-description {
    display: flex;
    flex-flow: row wrap;
    line-height: 1.5rem;
    margin-bottom: 2rem;
  }

  .tag {
    margin-bottom: 2rem;
  }

  .post-date {
    display: flex;
    flex-direction: column;
    span {
      color: ${palette.gray6};
    }
  }

  &:hover {
    cursor: pointer;
    box-shadow: 1px 1px 10px 3px ${palette.gray3};
  }
`;

export default memo(PostCard);
