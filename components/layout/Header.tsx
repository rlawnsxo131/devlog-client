import * as React from 'react';
import { GET_POSTS } from '../../graphql/post';
import { useQuery } from '@apollo/react-hooks';

type HeaderProps = {};

function Header(props: HeaderProps) {
  const { loading, error, data } = useQuery(GET_POSTS, {
    variables: {
      all: true,
    },
  });
  if (loading) return <div>loading</div>;
  if (error) return <div>error</div>;
  return (
    <div>
      Header
      <div>{JSON.stringify(data)}</div>
    </div>
  );
}

export default Header;
