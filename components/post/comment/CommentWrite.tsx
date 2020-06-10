import * as React from 'react';
import styled, { css } from 'styled-components';
import DefaultInput from '../../common/Input';
import useInputs from '../../../lib/hooks/useInputs';
import Textarea from '../../common/Textarea';
import { useRouter } from 'next/dist/client/router';
import Button from '../../common/Button';
import commentWrite from './hooks/commentWrite';

type CommentWriteProps = {
  reply_comment_id?: number;
  setShowCommentWrite?: React.Dispatch<React.SetStateAction<boolean>>;
};

const { useCallback } = React;
function CommentWrite({
  reply_comment_id,
  setShowCommentWrite,
}: CommentWriteProps) {
  const router = useRouter();
  const post_id = router.query.id as string;
  const [state, onChange, onReset] = useInputs({
    writer: '',
    password: '',
    comment: '',
  });
  const { createComment } = commentWrite();
  const handleCreateComment = useCallback(async () => {
    await createComment({
      post_id: Number(post_id),
      writer: state.writer,
      password: state.password,
      comment: state.comment,
      reply_comment_id,
    });
    if (setShowCommentWrite) setShowCommentWrite(false);
    onReset();
  }, [state]);

  return (
    <Block reply_comment_id={reply_comment_id}>
      <div className="user-info">
        <DefaultInput
          type="text"
          name="writer"
          placeholder="작성자"
          value={state.writer}
          handleChange={onChange}
        />
        <DefaultInput
          type="password"
          name="password"
          placeholder="비밀번호"
          value={state.password}
          handleChange={onChange}
        />
      </div>
      <div className="comment">
        <Textarea
          name="comment"
          value={state.comment}
          placeholder="댓글을 작성하세요"
          handleChange={onChange}
        />
      </div>
      <div className="comment-button-area">
        <Button handleClick={handleCreateComment} color="pink">
          댓글 작성
        </Button>
      </div>
    </Block>
  );
}

const Block = styled.div<{ reply_comment_id?: number }>`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
  ${(props) =>
    props.reply_comment_id &&
    css`
      padding-left: 1rem;
      padding-right: 1rem;
      padding-top: 1.5rem;
    `}

  .user-info {
    display: flex;
    flex-flow: row wrap;
    margin-bottom: 0.125rem;
  }
  .comment {
    margin-bottom: 2vh;
  }
  .comment-button-area {
    display: flex;
    justify-content: flex-end;
  }
`;

export default CommentWrite;
