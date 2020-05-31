import * as React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import media from '../../lib/styles/media';

type DefaultTextareaProps = {
  name: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const { memo } = React;
function DefaultTextarea(props: DefaultTextareaProps) {
  return (
    <Block>
      <Textarea />
    </Block>
  );
}

const Block = styled.div`
  min-height: 7.8rem;
  background-color: white;
  border: 1px solid ${palette.gray5};
  border-radius: 0.3rem;
`;

const Textarea = styled.textarea`
  all: unset;
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

export default memo(DefaultTextarea);
