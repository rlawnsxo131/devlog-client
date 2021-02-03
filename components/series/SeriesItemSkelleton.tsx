import * as React from 'react';
import styled from 'styled-components';
import { Paragraph } from '../common/Paragraph';
import { LengthParagraph } from '../common/Paragraph';

type SeriesItemSkelletonProps = {
  seriesKey: number;
};

const { useRef } = React;
function SeriesItemSkelleton({ seriesKey }: SeriesItemSkelletonProps) {
  const array = useRef<Array<number>>([1, 2, 3, 4, 5]);
  return (
    <Block>
      <div className="title">
        <Paragraph width={20} height={1.5} />
      </div>
      <div className="content">
        {array.current.map((v, i) => (
          <LengthParagraph key={`${seriesKey}${i}`} length={7.5} />
        ))}
      </div>
    </Block>
  );
}

const Block = styled.div`
  display: flex;
  flex-direction: column;
  .content {
    margin-left: 1.5rem;
  }

  & + & {
    margin-top: 1.5rem;
  }
`;

export default SeriesItemSkelleton;
