import * as React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import media from '../../lib/styles/media';

type DefaultInputProps = {
  type: string;
  name: string;
  placeholder: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const { memo } = React;
function DefaultInput({
  type,
  name,
  placeholder,
  value,
  handleChange,
}: DefaultInputProps) {
  return (
    <Input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
    />
  );
}

const Input = styled.input`
  all: unset;
  padding: 0.5rem;
  border: 1px solid ${palette.gray5};
  border-radius: 0.3rem;
  box-shadow: none;
  background-color: white;
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

export default memo(DefaultInput);
