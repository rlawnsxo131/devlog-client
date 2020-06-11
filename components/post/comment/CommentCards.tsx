import * as React from 'react';
import { CommentType } from '../../../graphql/comment';
import CommentCard from './CommentCard';

type CommentCardsProps = {
  replies: Array<CommentType>;
};

const { memo } = React;
function CommentCards({ replies }: CommentCardsProps) {
  let repliesFullCountArr: Array<number> = [];
  if (replies.length) {
    replies.forEach((v, i) => {
      let countResult: number = 0;
      if (v.replies) {
        countResult = countResult + v.replies.length;
        v.replies.forEach((v) => {
          if (v.replies) {
            countResult = countResult + v.replies.length;
          }
        });
      }
      repliesFullCountArr[i] = countResult;
    });
  }

  return (
    <>
      {replies &&
        replies.map((v, i) => (
          <CommentCard
            key={`comment${v.id}`}
            reply={v}
            repliesFullCount={
              v.level === 0 ? repliesFullCountArr[i] : undefined
            }
          />
        ))}
    </>
  );
}

export default memo(CommentCards);
