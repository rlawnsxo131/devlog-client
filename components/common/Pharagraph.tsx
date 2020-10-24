import * as React from 'react';
import styled, { keyframes } from 'styled-components';
import palette from '../../lib/styles/palette';
import { getRandomInt } from '../../lib/utils';

const { useRef, memo } = React;

type PharagraphProps = {
  width: number;
  height: number;
};
export const Pharagraph = memo(({ width, height }: PharagraphProps) => {
  return <PharagraphBlock width={width} height={height} />;
});
const shining = keyframes`
   0% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.5;
  }
`;
const PharagraphBlock = styled.div<PharagraphProps>`
  width: ${(props) => `${props.width}rem`};
  height: ${(props) => `${props.height}rem`};
  background: ${palette.gray1};
  animation: ${shining} 1s ease-in-out infinite;
  display: inline-block;
  border-radius: 0.25rem;
  margin-bottom: 0.5rem;
  margin-right: 0.5rem;
`;

type LengthPharagraphProps = {
  length: number;
};
export const LengthPharagraph = memo(({ length }: LengthPharagraphProps) => {
  const lengthPharagraph = useRef<Array<React.ReactNode> | undefined>(
    undefined,
  );
  (() => {
    const result = [];
    for (let i = 0; i < length; i++) {
      const width = getRandomInt(0, 7);
      result.push(<Pharagraph key={`${i}`} width={width} height={1} />);
    }
    lengthPharagraph.current = result;
  })();
  return (
    <LengthPharagraphBlock>{lengthPharagraph.current}</LengthPharagraphBlock>
  );
});
const LengthPharagraphBlock = styled.div`
  display: flex;
  flex-flow: row wrap;
  div {
    margin-bottom: 1rem;
  }
`;

type BlockPharagraphProps = {
  height: number;
};
export const BlockPharagraph = memo(({ height }: BlockPharagraphProps) => {
  return <BlockPharagraphBlock height={height} />;
});
const BlockPharagraphBlock = styled.div<BlockPharagraphProps>`
  height: ${(props) => `${props.height}rem`};
  background: ${palette.gray1};
  animation: ${shining} 1s ease-in-out infinite;
  display: block;
  border-radius: 0.25rem;
  margin-bottom: 0.5rem;
`;
