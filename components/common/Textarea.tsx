import * as React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import media from '../../lib/styles/media';

type DefaultTextareaProps = {
  name: string;
  value: string;
  placeholder?: string;
  handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const { memo } = React;
function Textarea({
  name,
  value,
  placeholder,
  handleChange,
}: DefaultTextareaProps) {
  return (
    <Block>
      <TextareaBlock
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </Block>
  );
}

const Block = styled.div`
  display: flex;
  height: 6rem;
  background-color: white;
  border-radius: 0.3rem;
`;

const TextareaBlock = styled.textarea`
  all: unset;
  flex: 1;
  border: 0.5px solid ${palette.gray3};
  border-radius: 0.3rem;
  line-height: 1.5;
  background-color: white;

  ::placeholder {
    color: ${palette.gray5};
  }

  ${media.xsmall} {
    font-size: 0.8rem;
    padding: 0.5rem;
  }
  ${media.medium} {
    font-size: 1rem;
    padding: 1rem;
  }
`;

export default memo(Textarea);
