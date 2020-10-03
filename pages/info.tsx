import * as React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import OpenLink from '../components/common/OpenLink';
import palette from '../lib/styles/palette';

type InfoProps = {};

function InfoPage(props: InfoProps) {
  return (
    <Block>
      <Head>
        <title>DevLog 소개</title>
        <meta name="description" content="블로그 소개" />
        <meta property="og:title" content="DevLog 소개" />
        <meta property="og:description" content="Devlog 소개" />
        <meta property="og:url" content="https://devlog.juntae.kim/info" />
        <meta property="og:type" content="article" />
      </Head>
      <ItemWrapper direction>
        <Item>Blog Tech stack</Item>
        <div className="list">
          <Item>- Node.js</Item>
          <Item>- Koa.js</Item>
          <Item>- React.js(Next.js)</Item>
          <Item>- GraphQL(Apollo Server, Client)</Item>
          <Item>- Typescript</Item>
          <Item>- MySQL</Item>
          <Item>- AWS(Lambda, APIGateway, EC2, Route53, CloudFront ...)</Item>
          <Item>- Serverless Framework</Item>
        </div>
      </ItemWrapper>
      <ItemWrapper>
        <Item>Blog Server:</Item>
        <OpenLink link="https://github.com/rlawnsxo131/devlog-server" />
      </ItemWrapper>
      <ItemWrapper>
        <Item>Blog Client:</Item>
        <OpenLink link="https://github.com/rlawnsxo131/devlog-client" />
      </ItemWrapper>
    </Block>
  );
}

const Block = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

const ItemWrapper = styled.div<{ direction?: boolean }>`
  display: flex;
  flex-flow: ${(props) => (props.direction ? 'column' : 'row wrap')};
  .list {
    display: flex;
    flex-direction: column;
    margin-left: 2rem;
    margin-top: 0.5rem;
  }
  & + & {
    margin-top: 1rem;
  }
`;

const Item = styled.span`
  display: inline-flex;
  font-weight: bold;
  color: ${palette.gray9};
  margin-right: 0.3rem;
  & + & {
    margin-top: 0.5rem;
  }
`;

export default InfoPage;
