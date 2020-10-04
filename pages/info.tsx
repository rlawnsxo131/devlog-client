import * as React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import OpenLink from '../components/common/OpenLink';
import palette from '../lib/styles/palette';
import media from '../lib/styles/media';

type InfoProps = {};

function InfoPage(props: InfoProps) {
  return (
    <Block>
      <Head>
        <title>Info - DevLog</title>
        <meta name="description" content="DevLog 소개" />
        <meta property="og:title" content="DevLog" />
        <meta property="og:description" content="DevLog 소개" />
        <meta property="og:url" content="https://devlog.juntae.kim/info" />
        <meta property="og:type" content="article" />
      </Head>
      <h3>DevLog Tech Stack</h3>
      <ul className="wrapper">
        <li>Typescript</li>
        <li>MySQL</li>
        <li>Serverless Framework</li>
        <li>
          NodeJS
          <ul>
            <li>Koa</li>
          </ul>
        </li>
        <li>
          React
          <ul>
            <li>NextJS</li>
          </ul>
        </li>
        <li>
          GraphQL
          <ul>
            <li>Apollo Server</li>
            <li>Apollo Client</li>
          </ul>
        </li>
        <li>
          AWS
          <ul>
            <li>EC2</li>
            <li>S3</li>
            <li>Lambda</li>
            <li>API Gateway</li>
            <li>Route53</li>
            <li>CloudFront</li>
          </ul>
        </li>
      </ul>
      <h3>Repository</h3>
      <ul className="wrapper">
        <li>
          Server:
          <OpenLink link="https://github.com/rlawnsxo131/devlog-server" />
        </li>
        <li>
          Client:
          <OpenLink link="https://github.com/rlawnsxo131/devlog-client" />
        </li>
      </ul>
    </Block>
  );
}

const Block = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  ul[class='wrapper'] {
    margin-top: 0.5rem;
    margin-left: 2rem;
  }
  ul + h3 {
    margin-top: 1rem;
  }
  ul {
    font-weight: 500;
    line-height: 1.5;
    ul {
      font-weight: 400;
      margin-left: 2rem;
    }
    ${media.xsmall} {
      font-size: 0.85rem;
    }
    ${media.medium} {
      font-size: 0.875rem;
    }
    ${media.large} {
      font-size: 1rem;
    }
  }
`;

export default InfoPage;
