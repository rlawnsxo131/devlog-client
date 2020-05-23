import * as React from 'react';
import { useRouter } from 'next/dist/client/router';

type IndexTagProps = {};

function IndexTag(props: IndexTagProps) {
  const router = useRouter();
  return <div>indexTag</div>;
}

export default IndexTag;
