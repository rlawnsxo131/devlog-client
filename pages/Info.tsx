import * as React from 'react';
import styled from 'styled-components';
import Head from 'next/head';

type InfoProps = {};

function InfoPage(props: InfoProps) {
  return (
    <Block>
      <Head>
        <title>DevelopmentLog 소개</title>
        <meta name="description" content="블로그 소개" />
      </Head>
      info
    </Block>
  );
}

const Block = styled.div`
  display: flex;
  flex-direction: column;
`;

export default InfoPage;
