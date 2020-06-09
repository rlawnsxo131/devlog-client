import * as React from 'react';
import { CommentType } from '../../../graphql/comment';
import CommentCard from './CommentCard';

type CommentCardsProps = {
  replies: Array<CommentType>;
};

function CommentCards({ replies }: CommentCardsProps) {
  return (
    <>
      {replies &&
        replies.map((v) => <CommentCard key={`comment${v.id}`} reply={v} />)}
    </>
  );
}

export default CommentCards;
