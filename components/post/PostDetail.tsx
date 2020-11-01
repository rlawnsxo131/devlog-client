import * as React from 'react';
import { useRouter } from 'next/dist/client/router';
import { useQuery } from '@apollo/react-hooks';
import { GET_POST } from '../../graphql/post';
import styled from 'styled-components';
import { formatDate, getErrorCode } from '../../lib/utils';
import palette from '../../lib/styles/palette';
import DefaultTags from '../tag/DefaultTags';
import PostViewer from './PostViewer';
import Comments from './comment/Comments';
import PostDetailSkelleton from './PostDetailSkelleton';
import media from '../../lib/styles/media';
import SeriesPosts from './series/SeriesPosts';
import ErrorPageWrapper from '../common/ErrorPageWrapper';
import HeadWrapper from '../common/HeadWrapper';

type PostDetailProps = {};

const { memo, useEffect } = React;
function PostDetail(props: PostDetailProps) {
  const { query } = useRouter();
  const { id, title: post_header } = query;
  if (!id || !post_header) return <ErrorPageWrapper code={404} />;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { loading, error, data } = useQuery(GET_POST, {
    variables: {
      id,
      post_header,
    },
    fetchPolicy: 'cache-and-network',
  });

  if (loading) return <PostDetailSkelleton />;
  if (error) {
    const code = getErrorCode(error);
    return <ErrorPageWrapper code={code} />;
  }

  return (
    <Block>
      <HeadWrapper
        title={data.post.post_header}
        description={data.post.short_description}
        url={`post/${post_header}?id=${id}`}
      />
      <div className="post-wrapper">
        <div className="post-header">
          <h1>{data.post.post_header}</h1>
        </div>
        <div className="post-date">
          <span>{formatDate(data.post.released_at)}</span>
        </div>
        <div className="tags">
          {data.post.tags.length ? <DefaultTags tags={data.post.tags} /> : null}
        </div>
        <div className="short-description">
          <h3>{data.post.short_description}</h3>
        </div>
        <div className="post-body">
          <PostViewer content={data.post.post_body} />
        </div>
        <div className="series-posts">
          <SeriesPosts series_posts={data.post.series_posts} />
        </div>
        <div className="comments">
          <Comments comments_count={data.post.comments_count} />
        </div>
      </div>
    </Block>
  );
}

const Block = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-bottom: 10vh;

  .post-wrapper {
    display: flex;
    flex-direction: column;
    .post-header {
      color: ${palette.pink7};
      margin-bottom: 1rem;
    }

    .post-date {
      display: flex;
      flex-flow: row wrap;
      color: ${palette.gray6};
      margin-bottom: 1.5rem;
    }

    .tags {
      display: flex;
      margin-bottom: 2rem;
    }

    .short-description {
      color: ${palette.gray8};
      font-size: 1rem;
      font-weight: bold;
      margin-bottom: 2rem;
    }

    .post-body {
      margin-bottom: 5rem;
    }

    .series-posts {
      margin-bottom: 1rem;
    }

    .comments {
      margin-top: 3rem;
    }
    ${media.xsmall} {
      width: calc(100vw - 6vw);
    }
    ${media.small} {
      width: 43rem;
    }
    ${media.medium} {
      width: 47rem;
    }
    ${media.large} {
      width: 63rem;
    }
  }
`;

export default memo(PostDetail);
