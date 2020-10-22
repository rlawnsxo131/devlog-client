import * as React from 'react';
import styled from 'styled-components';
import palette from '../lib/styles/palette';
import RedirectHomeLink from '../components/common/RedirectHomeLink';

type Custom404Props = {};

function Custom404(props: Custom404Props) {
  return (
    <Block>
      <h1>찾을 수 없어요</h1>
      <h1>404 NOT FOUND</h1>
      <RedirectHomeLink />
    </Block>
  );
}

const Block = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5rem;

  h1 {
    font-size: 2rem;
    margin-bottom: 3rem;
  }
`;

export default Custom404;
