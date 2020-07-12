import * as React from 'react';
import styled, { css } from 'styled-components';
import palette from '../../lib/styles/palette';
import media from '../../lib/styles/media';

type InputSize = 'default' | 'responsive';
type DefaultInputProps = {
  type: string;
  name: string;
  placeholder: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  inputSize?: InputSize;
};

const { memo } = React;
function Input({
  type,
  name,
  placeholder,
  value,
  handleChange,
  handleKeyPress,
  inputSize = 'default',
}: DefaultInputProps) {
  return (
    <InputBlock
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      onKeyPress={handleKeyPress}
      inputSize={inputSize}
    />
  );
}

const InputBlock = styled.input<{ inputSize: InputSize }>`
  all: unset;
  ${(props) =>
    props.inputSize === 'responsive' &&
    css`
      flex: 1;
    `}
  padding: 0.5rem;
  border: 0.5px solid ${palette.gray3};
  border-radius: 0.3rem;
  box-shadow: none;
  background: white;

  ::placeholder {
    color: ${palette.gray5};
  }

  ${media.xsmall} {
    font-size: 0.8rem;
  }
  ${media.medium} {
    font-size: 1rem;
  }
`;

export default memo(Input);
