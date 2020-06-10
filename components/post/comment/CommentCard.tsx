import * as React from 'react';
import styled, { css } from 'styled-components';
import { CommentType } from '../../../graphql/comment';
import { formatDate } from '../../../lib/utils';
import media from '../../../lib/styles/media';
import palette from '../../../lib/styles/palette';
import CommentCards from './CommentCards';
import CommentWrite from './CommentWrite';
import Button from '../../common/Button';

type CommentCardProps = {
  reply: CommentType;
};

const { useState, useCallback } = React;
function CommentCard({ reply }: CommentCardProps) {
  const [showReply, setShowReply] = useState<boolean>(false);
  const [showCommentWrite, setShowCommentWrite] = useState<boolean>(false);

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
        <div className="edit">수정/삭제</div>
      </CommentCardHeader>
      <CommentCardBody>{reply.comment}</CommentCardBody>
      <CommentCardFooter>
        {reply.level < 2 && !reply.deleted && (
          <div className="replies-trigger" onClick={handleShowReply}>
            {reply.has_replies && reply.replies.length
              ? `${showReply ? '숨기기' : `+${reply.replies.length}개의 답글`}`
              : `${showReply ? '숨기기' : '답글 남기기'}`}
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
      background-color: ${palette.gray0};
    `}

  .last-comment-write {
    display: flex;
    flex-direction: column;
    background-color: ${palette.gray0};
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
    padding-right: 0.25rem;
    color: ${palette.gray6};
    &:hover {
      cursor: pointer;
      color: ${palette.gray5};
    }
  }
`;

const CommentCardBody = styled.div`
  margin-bottom: 1.5rem;
  color: ${palette.gray9};
  font-weight: normal;
  white-space: pre-wrap;
  line-height: 1.5;
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

export default CommentCard;