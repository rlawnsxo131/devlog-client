import { NextPageContext } from 'next';
import * as React from 'react';
import styled from 'styled-components';
import RedirectHomeLink from '../components/common/RedirectHomeLink';
import palette from '../lib/styles/palette';

type ErrorPageProps = {
  statusCode: number;
};

function CustomError({ statusCode }: ErrorPageProps) {
  return (
    <Block>
      <h1>알수없는 에러</h1>
      <h1>{statusCode}</h1>
      <h1>Internal Server Error</h1>
      <RedirectHomeLink />
    </Block>
  );
}

const Block = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5rem;
  h1 {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`;

CustomError.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default CustomError;
