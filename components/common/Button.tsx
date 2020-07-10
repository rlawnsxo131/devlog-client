import * as React from 'react';
import styled, { css } from 'styled-components';
import { buttonColorMap } from '../../lib/styles/palette';
import media from '../../lib/styles/media';

type ColorType = 'gray' | 'pink' | 'teal';
type ButtonSize = 'default' | 'responsive';
type ButtonProps = {
  name?: string;
  value?: string;
  handleClick: (
    e?: React.MouseEvent<HTMLButtonElement>,
  ) => void | Promise<void>;
  color?: ColorType;
  size?: ButtonSize;
  inline?: boolean;
  children: React.ReactNode;
};

const { memo } = React;
function Button({
  name = '',
  value = '',
  handleClick,
  color = 'gray',
  size = 'default',
  children,
}: ButtonProps) {
  return (
    <Block
      name={name}
      value={value}
      onClick={handleClick}
      color={color}
      size={size}
    >
      {children}
    </Block>
  );
}

const Block = styled.button<{
  color: ColorType;
  size: ButtonSize;
}>`
  all: unset;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.25rem;
  font-weight: bold;
  color: ${(props) => buttonColorMap[props.color].color};
  background: ${(props) => buttonColorMap[props.color].background};
  &:hover {
    cursor: pointer;
    background: ${(props) => buttonColorMap[props.color].hoverBackground};
  }

  ${(props) =>
    props.size === 'default' &&
    css`
      padding-left: 1.25rem;
      padding-right: 1.25rem;
      height: 2rem;
    `}
  ${(props) =>
    props.size === 'responsive' &&
    css`
      padding-top: 0.25rem;
      padding-bottom: 0.25rem;
      width: 100%;
    `}
  
  ${media.xsmall} {
    font-size: 0.875rem;
  }
  ${media.medium} {
    font-size: 1rem;
  }

  & + & {
    margin-left: 0.25rem;
  }
`;

export default memo(Button);
