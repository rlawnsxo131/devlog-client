import * as React from 'react';
import styled, { css } from 'styled-components';
import { CommentType } from '../../../graphql/comment';
import { formatDate } from '../../../lib/utils';
import media from '../../../lib/styles/media';
import palette from '../../../lib/styles/palette';
import CommentCards from './CommentCards';
import CommentWrite from './CommentWrite';
import Button from '../../common/Button';
import Input from '../../common/Input';
import useInputs from '../../../lib/hooks/useInputs';
import commentCard from './hooks/commentCard';
import CommentEdit from './CommentEdit';

type CommentCardProps = {
  reply: CommentType;
  repliesFullCount?: number;
};

const { useState, useCallback, memo } = React;
function CommentCard({ reply, repliesFullCount }: CommentCardProps) {
  const [showReply, setShowReply] = useState<boolean>(false);
  const [showCommentWrite, setShowCommentWrite] = useState<boolean>(false);
  const [state, onChange, onReset] = useInputs({
    password: '',
    editComment: reply.comment,
  });
  const [showEditPassword, setShowEditPassword] = useState<boolean>(false);
  // data -> email 기능 추가시 필요
  const { data, editMode, setEditMode, handleConfirmPassword } = commentCard({
    comment_id: reply.id,
    password: state.password,
    setShowEditPassword,
  });

  const handleShowReply = useCallback(() => {
    if (showReply && reply.has_replies) {
      setShowReply(!showReply);
      return;
    }
    if (!showReply && reply.has_replies) {
      setShowReply(!showReply);
      setShowCommentWrite(!setShowCommentWrite);
      return;
    }
    if (!reply.has_replies) {
      setShowReply(!showReply);
      setShowCommentWrite(!showCommentWrite);
      return;
    }
  }, [showReply]);

  const handleShowCommentWrite = useCallback(() => {
    setShowCommentWrite(!showCommentWrite);
  }, [showCommentWrite]);

  const handleShowEditPassword = useCallback(() => {
    onReset();
    setShowEditPassword(!showEditPassword);
  }, [showEditPassword]);

  const resetEditMode = useCallback(() => {
    onReset();
    setEditMode(false);
    setShowEditPassword(false);
  }, []);

  const handleKeyPress = useCallback(
    async (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        await handleConfirmPassword();
      }
    },
    [],
  );

  return (
    <Block level={reply.level}>
      <CommentCardHeader>
        <div className="writer-date">
          <span className="writer">{reply.writer}</span>
          <span className="date">
            {reply.edited_at
              ? `${formatDate(reply.edited_at)}(수정됨)`
              : formatDate(reply.created_at)}
          </span>
        </div>
        <div className="edit">
          {!reply.deleted && (
            <>
              <span onClick={handleShowEditPassword}>수정/삭제</span>
              {showEditPassword && (
                <div className="edit-password">
                  <Input
                    type="password"
                    name="password"
                    placeholder="비밀번호를 입력하세요"
                    value={state.password}
                    handleChange={onChange}
                    handleKeyPress={handleKeyPress}
                  />
                  <Button handleClick={handleConfirmPassword}>확인</Button>
                </div>
              )}
            </>
          )}
        </div>
      </CommentCardHeader>
      <CommentCardBody>
        {editMode ? (
          <CommentEdit
            comment_id={reply.id}
            comment={reply.comment}
            resetEditMode={resetEditMode}
          />
        ) : (
          reply.comment
        )}
      </CommentCardBody>
      <CommentCardFooter>
        {reply.level < 2 && (
          <div className="replies-trigger" onClick={handleShowReply}>
            {reply.has_replies && reply.replies.length
              ? `${
                  showReply
                    ? '숨기기'
                    : `+${
                        reply.level === 0
                          ? repliesFullCount
                          : reply.replies.length
                      }개의 답글`
                }`
              : `${reply.deleted ? '' : '답글 남기기'}`}
          </div>
        )}
      </CommentCardFooter>
      {showReply && <CommentCards replies={reply.replies} />}
      <div className="last-comment-write">
        {showReply && showCommentWrite && (
          <CommentWrite
            reply_comment_id={reply.id}
            setShowCommentWrite={setShowCommentWrite}
          />
        )}
        {showReply && reply.has_replies && !reply.deleted && (
          <Button
            color="pink"
            size="responsive"
            handleClick={handleShowCommentWrite}
          >
            {showCommentWrite ? '숨기기' : '답글 달기'}
          </Button>
        )}
      </div>
    </Block>
  );
}

const Block = styled.div<{ level: number }>`
  display: flex;
  flex-direction: column;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  ${(props) =>
    props.level > 0 &&
    css`
      padding-left: 1rem;
      padding-right: 1rem;
      background: ${palette.gray0};
    `}

  .last-comment-write {
    display: flex;
    flex-direction: column;
    background: ${palette.gray0};
  }

  ${media.xsmall} {
    font-size: 0.875rem;
  }
  ${media.medium} {
    font-size: 1rem;
  }

  & + & {
    border-top: 1px solid ${palette.gray3};
  }
`;

const CommentCardHeader = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  margin-bottom: 1.25rem;

  .writer-date {
    display: flex;
    flex-direction: column;
    .writer {
      color: ${palette.gray9};
      font-weight: bold;
    }
    .date {
      color: ${palette.gray6};
      ${media.xsmall} {
        font-size: 0.75rem;
      }
      ${media.medium} {
        font-size: 0.875rem;
      }
    }
  }

  .edit {
    display: flex;
    flex-direction: column;
    span {
      padding-right: 0.25rem;
      color: ${palette.gray6};
      &:hover {
        cursor: pointer;
        color: ${palette.gray5};
      }
    }
  }
`;

const CommentCardBody = styled.div`
  margin-bottom: 1.5rem;
  color: ${palette.gray9};
  font-weight: normal;
  white-space: pre-wrap;
  line-height: 1.5;
  word-break: break-all;
`;

const CommentCardFooter = styled.div`
  display: flex;
  flex-flow: row wrap;
  .replies-trigger {
    margin-bottom: 0.5rem;
    font-weight: bold;
    color: ${palette.pink7};
    &:hover {
      cursor: pointer;
      color: ${palette.pink5};
    }
  }
`;

export default memo(CommentCard);
