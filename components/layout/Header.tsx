import * as React from 'react';
import styled from 'styled-components';

type HeaderProps = {};

function Header(props: HeaderProps) {
  return <Block>header</Block>;
}

const Block = styled.div`
  color: red;
`;

export default Header;
