import * as React from 'react';
import styled from 'styled-components';
import DefaultTag from './DefaultTag';

type DefaultTagsProps = {
  tags: Array<string>;
};

const { memo } = React;
function DefaultTags({ tags }: DefaultTagsProps) {
  if (!tags.length) return <Block>태그가 없습니다.</Block>;
  return (
    <Block>
      {tags.map((val, idx) => (
        <DefaultTag key={`${val}${idx}`} name={val} />
      ))}
    </Block>
  );
}

const Block = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

export default memo(DefaultTags);
