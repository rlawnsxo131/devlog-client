import * as React from 'react';
import styled, { css } from 'styled-components';
import { buttonColorMap } from '../../lib/styles/palette';
import media from '../../lib/styles/media';

type ColorType = 'gray' | 'teal' | 'indigo' | 'red';
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

function Button({
  name = '',
  value = '',
  handleClick,
  color = 'gray',
  size = 'default',
  inline = false,
  children,
}: ButtonProps) {
  return (
    <Block
      name={name}
      value={value}
      onClick={handleClick}
      color={color}
      size={size}
      inline={inline}
    >
      {children}
    </Block>
  );
}

const Block = styled.button<{
  color: ColorType;
  size: ButtonSize;
  inline: boolean;
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
      padding: 0.5rem 1.25rem 0.5rem 1.25rem;
    `}
  ${(props) =>
    props.size === 'responsive' &&
    css`
      padding-top: 0.25rem;
      padding-bottom: 0.25rem;
      width: 100%;
    `}
  
  ${media.xsmall} {
    font-size: 0.8rem;
  }
  ${media.medium} {
    font-size: 1rem;
  }
`;

export default Button;
