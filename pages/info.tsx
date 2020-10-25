import * as React from 'react';
import styled from 'styled-components';
import OpenLink from '../components/common/OpenLink';
import media from '../lib/styles/media';
import HeadWrapper from '../components/common/HeadWrapper';
import palette from '../lib/styles/palette';

type InfoProps = {};

function InfoPage(props: InfoProps) {
  return (
    <Block>
      <HeadWrapper title="DevLog - Info" description="DevLog 소개" url="info" />
      <h2 className="description">Personal Development blog by John</h2>
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

  h2,
  h3 {
    color: ${palette.gray9};
  }

  .description {
    margin-bottom: 2rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid ${palette.gray3};
  }

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
