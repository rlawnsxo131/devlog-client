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
      <div className="description">
        <div className="greeting">
          <h2>Personal Development blog by John</h2>
          <p>
            2018년 1월, 28살이 되던해 int 가 무엇인지 배운 늦깎이 개발자 입니다.
          </p>
          <p>
            판교에 있는 한 스타트업에서 웹, 앱의 서버와 웹 프론트엔드 개발을하고
            있습니다.
          </p>
          <p>새로운걸 이것저것 해보고 싶은 개발자 입니다.</p>
        </div>
        <div className="email-contact">
          <a
            href="mailto: public.juntae@gmail.com"
            title="email"
            target="_blank"
          >
            public.juntae@gmail.com
          </a>
        </div>
      </div>
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

  .description {
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid ${palette.gray3};
    .greeting {
      display: flex;
      flex-direction: column;
      margin-bottom: 0.5rem;
      h2 {
        margin-bottom: 1rem;
      }
      p {
        font-weight: 500;
        color: ${palette.gray7};
        line-height: 2rem;
      }
    }
    .email-contact {
      display: flex;
      align-items: center;
      border-left: 3px solid ${palette.pink8};
      padding: 0.5rem 0.5rem 0.725rem 0.5rem;
      background: ${palette.pink0};
      a {
        font-weight: 500;
        color: ${palette.pink6};
        &:hover {
          cursor: pointer;
          color: ${palette.pink5};
        }
      }
    }
  }

  h2,
  h3 {
    color: ${palette.gray9};
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
