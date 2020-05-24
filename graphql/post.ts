import gql from 'graphql-tag';

export type PostType = {
  id: number;
  post_header: string;
  post_body: string;
  short_description: string;
  open_yn: boolean;
  series_id: number;
  created_at: Date;
  updated_at: Date;
  tags: Array<string>;
};

export const GET_POST = gql`
  query GetPost($id: ID!) {
    post(id: $id) {
      id
      post_header
      post_body
      short_description
      open_yn
      series_id
      created_at
      updated_at
      tags
    }
  }
`;

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
