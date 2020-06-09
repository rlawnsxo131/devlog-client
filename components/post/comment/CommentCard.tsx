import * as React from 'react';
import styled from 'styled-components';
import { CommentType } from '../../../graphql/comment';
import { formatDate } from '../../../lib/utils';
import media from '../../../lib/styles/media';
import palette from '../../../lib/styles/palette';

type CommentCardProps = {
  reply: CommentType;
};

function CommentCard({ reply }: CommentCardProps) {
  return (
    <Block>
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
      <CommentCardFooter>{reply.replies.length}</CommentCardFooter>
    </Block>
  );
}

const Block = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;

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
`;

export default CommentCard;
