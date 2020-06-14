import * as React from 'react';
import styled from 'styled-components';
import Textarea from '../../common/Textarea';
import useInputs from '../../../lib/hooks/useInputs';
import Button from '../../common/Button';
import {
  UpdateCommentType,
  REMOVE_COMMENT,
  UPDATE_COMMENT,
} from '../../../graphql/comment';
import { useMutation } from '@apollo/react-hooks';

type CommentEditProps = {
  comment_id: number;
  email?: string;
  comment: string;
  resetEditMode: () => void;
};

const { useCallback } = React;
function CommentEdit({
  comment_id,
  email,
  comment,
  resetEditMode,
}: CommentEditProps) {
  const [state, onChange, onReset] = useInputs({
    email: email ? email : '',
    comment,
  });
  const [updateComment] = useMutation<{ variables: UpdateCommentType }>(
    UPDATE_COMMENT,
    { refetchQueries: ['GetComments'] },
  );
  const [removeComment] = useMutation<{ variables: { comment_id: number } }>(
    REMOVE_COMMENT,
    { refetchQueries: ['GetComments'] },
  );

  const handleUpdateComment = useCallback(async () => {
    if (confirm('댓글을 수정하시겠어요?')) {
      await updateComment({
        variables: {
          comment_id,
          ...state,
        },
      });
      onReset();
      resetEditMode();
    }
  }, [state]);

  const handleRemoveComment = useCallback(async () => {
    if (confirm('댓글을 삭제하시겠어요?')) {
      await removeComment({
        variables: {
          comment_id,
        },
      });
      onReset();
      resetEditMode();
    }
  }, []);

  return (
    <Block>
      <Textarea name="comment" value={state.comment} handleChange={onChange} />
      <div className="edit-button">
        <Button handleClick={resetEditMode}>취소</Button>
        <Button handleClick={handleUpdateComment}>수정</Button>
        <Button handleClick={handleRemoveComment}>삭제</Button>
      </div>
    </Block>
  );
}

const Block = styled.div`
  display: flex;
  flex-direction: column;
  .edit-button {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-end;
  }
`;

export default CommentEdit;
