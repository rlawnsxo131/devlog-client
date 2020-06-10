import * as React from 'react';
import { useRouter } from 'next/dist/client/router';
import { useQuery } from '@apollo/react-hooks';
import { GET_POST } from '../../graphql/post';
import styled from 'styled-components';
import { formatDate } from '../../lib/utils';
import palette from '../../lib/styles/palette';
import DefaultTags from '../tag/DefaultTags';
import PostViewer from './PostViewer';
import Comments from './comment/Comments';

type PostDetailProps = {};

function PostDetail(props: PostDetailProps) {
  const router = useRouter();
  if (!router.query.id) return <div>not found id</div>;
  const { loading, error, data } = useQuery(GET_POST, {
    variables: {
      id: router.query.id,
    },
  });

  if (loading) return <div>loading</div>;
  if (error) return <div>error</div>;

  return (
    <Block>
      <div className="post-header">
        <h2>{data.post.post_header}</h2>
      </div>
      <div className="tags">
        {data.post.tags.length ? <DefaultTags tags={data.post.tags} /> : null}
      </div>
      <div className="post-date">
        <span>작성: {formatDate(data.post.created_at)}</span>
        <span>수정: {formatDate(data.post.updated_at)}</span>
      </div>
      <div className="short-description">{data.post.short_description}</div>
      <div className="post-body">
        <PostViewer content={data.post.post_body} />
      </div>
      <div className="comments">
        <Comments comments_count={data.post.comments_count} />
      </div>
    </Block>
  );
}

const Block = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 10vh;

  .post-header {
    color: ${palette.pink7};
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    h2 {
      all: unset;
      font-size: 1.5rem;
      font-weight: bold;
    }
  }

  .tags {
    margin-bottom: 1rem;
  }

  .post-date {
    display: flex;
    flex-flow: row wrap;
    font-size: 0.95rem;
    color: ${palette.gray6};
    margin-bottom: 1rem;
    span + span {
      margin-left: 1rem;
    }
  }

  .short-description {
    color: ${palette.gray8};
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  .post-body {
    margin-bottom: 1rem;
  }
`;

export default PostDetail;
