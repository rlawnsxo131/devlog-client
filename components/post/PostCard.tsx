import * as React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import DefaultTags from '../tag/DefaultTags';
import { PostType } from '../../graphql/post';
import { formatDate } from '../../lib/utils';
import { useRouter } from 'next/dist/client/router';
import media from '../../lib/styles/media';
import optimizeImage from '../../lib/optimizeImage';

type PostCardProps = {
  post: PostType;
};

const { memo, useCallback } = React;
function PostCard({ post }: PostCardProps) {
  const router = useRouter();
  const handlePostDetail = useCallback(() => {
    router.push({
      pathname: `/post/${post.post_header}`,
      query: { id: post.id },
    });
  }, []);
  return (
    <Block onClick={handlePostDetail}>
      <MobileThumnail>
        {post.thumnail && (
          <img src={optimizeImage(post.thumnail, 320)} alt="post-thumnail" />
        )}
      </MobileThumnail>
      <div className="post-content">
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
      </div>
      <Thumnail>
        {post.thumnail && (
          <img src={optimizeImage(post.thumnail, 320)} alt="post-thumnail" />
        )}
      </Thumnail>
    </Block>
  );
}

const Block = styled.div`
  position: relative;
  display: flex;
  margin-bottom: 1rem;
  padding: 2rem;
  border-radius: 0.25rem;
  box-shadow: 1px 1px 10px 2px ${palette.gray1};
  overflow: auto;

  .post-content {
    flex: 1 1 0%;
    display: flex;
    flex-direction: column;
    .post-header {
      display: flex;
      flex-flow: row wrap;
      justify-content: space-between;
      color: ${palette.pink7};
      margin-bottom: 1.5rem;
      span {
        position: absolute;
        top: 0.5rem;
        right: 1rem;
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
  }

  &:hover {
    cursor: pointer;
    box-shadow: 1px 1px 10px 3px ${palette.gray3};
  }

  ${media.xsmall} {
    flex-direction: column;
    height: 25rem;
  }
  ${media.small} {
    flex-direction: row;
    height: 16rem;
  }
`;

const MobileThumnail = styled.div`
  position: relative;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-bottom: 1rem;
  img {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    display: block;
    margin: auto;
    object-fit: cover;
  }
  ${media.xsmall} {
    display: flex;
  }
  ${media.small} {
    display: none;
  }
`;

const Thumnail = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15rem;
  height: 100%;
  margin-bottom: 0;
  img {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    display: block;
    margin: auto;
    object-fit: cover;
  }
  ${media.xsmall} {
    display: none;
  }
  ${media.small} {
    display: flex;
  }
`;

export default memo(PostCard);
