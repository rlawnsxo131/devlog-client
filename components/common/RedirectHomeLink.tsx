import Link from 'next/link';
import * as React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

type RedirectHomeLinkProps = {};

function RedirectHomeLink(props: RedirectHomeLinkProps) {
  return (
    <Link href="/">
      <CustomAnchor>
        <h2>Home</h2>
      </CustomAnchor>
    </Link>
  );
}

const CustomAnchor = styled.a`
  display: flex;
  flex-direction: column;
  background: ${palette.pink5};
  color: white;
  padding: 0.5rem 1rem 0.5rem 1rem;
  border-radius: 0.3rem;
  &:hover {
    cursor: pointer;
    background: ${palette.pink4};
  }
`;

export default RedirectHomeLink;
