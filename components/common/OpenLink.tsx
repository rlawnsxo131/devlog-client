import * as React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

type OpenLinkProps = {
  link: string;
};

const { useCallback } = React;
function OpenLink({ link }: OpenLinkProps) {
  const openLink = useCallback(() => {
    window.open(link);
  }, []);
  return (
    <Block>
      <span onClick={openLink}>{link}</span>
    </Block>
  );
}

const Block = styled.div`
  display: inline-flex;
  flex-flow: row wrap;
  align-items: center;
  margin-left: 0.5rem;
  span {
    font-weight: 500;
    color: ${palette.pink7};
    &:hover {
      cursor: pointer;
      color: ${palette.pink5};
    }
  }
`;

export default OpenLink;
