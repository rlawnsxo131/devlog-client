import * as React from 'react';
import styled from 'styled-components';

type ColorType = 'gray' | 'teal' | 'indigo' | 'red';
type ButtonSize = 'medium' | 'large';
type ButtonProps = {};

function Button(props: ButtonProps) {
  return <Block></Block>;
}

const Block = styled.button``;

export default Button;
