import { useMutation } from '@apollo/react-hooks';
import { CreateCommentType, CREATE_COMMENT } from '../../../../graphql/comment';
import { useCallback } from 'react';
import {
  normalizedInputCheck,
  normalizedInputChange,
} from '../../../../lib/utils';

type CommentWriteHook = {
  createComment: ({
    post_id,
    reply_comment_id,
    writer,
    password,
    comment,
  }: CreateCommentType) => Promise<void>;
};
type CommentWriteNormalized = {
  writer: string;
  password: string;
  comment: string;
};

export default function commentWrite(): CommentWriteHook {
  const [CreateComment] = useMutation<{
    createComment: { id: number };
    variables: CreateCommentType;
  }>(CREATE_COMMENT, {
    refetchQueries: ['GetComments'],
  });

  const commentNormalizedCheck = useCallback(
    ({ writer, password, comment }: CommentWriteNormalized) => {
      if (
        !normalizedInputCheck(writer) ||
        !normalizedInputCheck(password) ||
        !normalizedInputCheck(comment)
      ) {
        return false;
      }
      return {
        writer: normalizedInputChange(writer),
        password: normalizedInputChange(password),
        comment,
      };
    },
    [],
  );

  const createComment = useCallback(
    async ({ post_id, reply_comment_id, writer, password, comment }) => {
      const normalized = commentNormalizedCheck({
        writer,
        password,
        comment,
      });
      if (!normalized) return alert('모든 항목을 입력해주세요!');
      try {
        await CreateComment({
          variables: {
            post_id,
            reply_comment_id,
            writer: normalized.writer,
            password: normalized.password,
            comment: normalized.comment,
          },
        });
        alert('성공');
      } catch (e) {
        console.error(e);
      }
    },
    [],
  );

  return {
    createComment,
  };
}
