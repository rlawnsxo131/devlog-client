import * as React from 'react';
import styled, { css, keyframes } from 'styled-components';
import palette from '../../lib/styles/palette';
import { getRandomInt } from '../../lib/utils';

const { useRef, memo } = React;

type ParagraphProps = {
  width: number;
  height: number;
};
export const Paragraph = memo(({ width, height }: ParagraphProps) => {
  return <ParagraphBlock width={width} height={height} />;
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
const ParagraphBlock = styled.div<ParagraphProps>`
  width: ${(props) => `${props.width}rem`};
  height: ${(props) => `${props.height}rem`};
  background: ${palette.gray1};
  animation: ${shining} 1s ease-in-out infinite;
  display: inline-block;
  border-radius: 0.25rem;
  margin-bottom: 0.5rem;
  margin-right: 0.5rem;
`;

type LengthParagraphProps = {
  length: number;
};
export const LengthParagraph = memo(({ length }: LengthParagraphProps) => {
  const lengthParagraph = useRef<Array<React.ReactNode> | undefined>(undefined);
  (() => {
    const result = [];
    for (let i = 0; i < length; i++) {
      const width = getRandomInt(0, 7);
      result.push(<Paragraph key={`${i}`} width={width} height={1} />);
    }
    lengthParagraph.current = result;
  })();
  return <LengthParagraphBlock>{lengthParagraph.current}</LengthParagraphBlock>;
});
const LengthParagraphBlock = styled.div`
  display: flex;
  flex-flow: row wrap;
  div {
    margin-bottom: 1rem;
  }
`;

type BlockParagraphProps = {
  height: number;
};
export const BlockParagraph = memo(({ height }: BlockParagraphProps) => {
  return <BlockParagraphBlock height={height} />;
});
const BlockParagraphBlock = styled.div<BlockParagraphProps>`
  height: ${(props) => `${props.height}rem`};
  background: ${palette.gray1};
  animation: ${shining} 1s ease-in-out infinite;
  display: block;
  border-radius: 0.25rem;
  margin-bottom: 0.5rem;
`;

type StyleParagraphProps = {
  styles?: string;
};
export const StyleParagraph = memo(({ styles }: StyleParagraphProps) => {
  return <StyleParagraphBlock styles={styles} />;
});
const StyleParagraphBlock = styled.div<StyleParagraphProps>`
  ${(props) =>
    props.styles &&
    css`
      ${props.styles}
    `}
  background: ${palette.gray1};
  animation: ${shining} 1s ease-in-out infinite;
  display: block;
  border-radius: 0.25rem;
`;
