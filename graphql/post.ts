import gql from 'graphql-tag';

export const GET_POSTS = gql`
  query GetPosts($tag: String, $all: Boolean!) {
    posts(tag: $tag, all: $all) {
      id
      post_header
      short_description
      open_yn
      created_at
      updated_at
      tags
    }
  }
`;
