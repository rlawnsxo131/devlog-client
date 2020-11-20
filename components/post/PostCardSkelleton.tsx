import * as React from 'react';
import styled from 'styled-components';
import media from '../../lib/styles/media';
import palette from '../../lib/styles/palette';
import { StylePharagraph } from '../common/Pharagraph';

type PostCardSkelletonProps = {};

function PostCardSkelleton(props: PostCardSkelletonProps) {
  return (
    <Block>
      <div className="post-content">
        <StylePharagraph
          styles={'height: 1rem; margin-left: 0.5rem; margin-right: 0.5rem;'}
        />
        <StylePharagraph
          styles={'height: 1rem; margin-left: 0.5rem; margin-right: 0.5rem;'}
        />
        <StylePharagraph
          styles={'height: 1rem; margin-left: 0.5rem; margin-right: 0.5rem;'}
        />
        <StylePharagraph
          styles={'height: 1rem; margin-left: 0.5rem; margin-right: 0.5rem;'}
        />
        <StylePharagraph
          styles={'height: 1rem; margin-left: 0.5rem; margin-right: 0.5rem;'}
        />
        <StylePharagraph
          styles={'height: 1rem; margin-left: 0.5rem; margin-right: 0.5rem;'}
        />
      </div>
      <Thumnail>
        <StylePharagraph
          styles={`position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;`}
        />
      </Thumnail>
    </Block>
  );
}

const Block = styled.div`
  display: flex;
  height: 14rem;
  margin-bottom: 1rem;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 1px 1px 10px 2px ${palette.gray1};
  overflow: auto;

  .post-content {
    flex: 1 1 0%;
    display: flex;
    flex-direction: column;
    div {
      margin-bottom: 1rem;
    }
  }

  ${media.xsmall} {
    flex-direction: column-reverse;
    height: 25rem;
  }
  ${media.small} {
    flex-direction: row;
    height: 16rem;
  }
`;

const Thumnail = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  height: 100%;

  ${media.xsmall} {
    width: 100%;
    margin-bottom: 1rem;
  }
  ${media.small} {
    width: 20rem;
    margin-bottom: 0;
  }
`;

export default PostCardSkelleton;
