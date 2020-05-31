import gql from 'graphql-tag';

export type CommentType = {
  id: number;
  post_id: number;
  level: number;
  has_replies: boolean;
  reply_comment_id?: number;
  deleted: boolean;
  writer: string;
  comment: string;
  created_at: Date;
  updated_at: Date;
  edited_at?: Date;
  replies: Array<CommentType>;
};

export const GET_COMMENTS = gql`
  query GetComments($post_id: ID!) {
    comments(post_id: $post_id) {
      id
      post_id
      level
      has_replies
      reply_comment_id
      deleted
      writer
      comment
      created_at
      updated_at
      edited_at
      replies {
        id
        post_id
        level
        has_replies
        reply_comment_id
        deleted
        writer
        comment
        created_at
        updated_at
        edited_at
        replies {
          id
          post_id
          level
          has_replies
          reply_comment_id
          deleted
          writer
          comment
          created_at
          updated_at
          edited_at
        }
      }
    }
  }
`;

export type CreateCommentType = {
  post_id: number;
  reply_comment_id?: number;
  writer: string;
  password: string;
  comment: string;
};
export const CREATE_COMMENT = gql`
  mutation CreateComment(
    $post_id: ID!
    $reply_comment_id: ID
    $writer: String!
    $password: String!
    $comment: String!
  ) {
    createComment(
      post_id: $post_id
      reply_comment_id: $reply_comment_id
      writer: $writer
      password: $password
      comment: $comment
    ) {
      id
    }
  }
`;
