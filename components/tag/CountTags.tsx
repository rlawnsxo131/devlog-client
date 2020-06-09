import * as React from 'react';
import styled from 'styled-components';
import CountTag from './CountTag';
import { TagType } from '../../graphql/tag';

type CountTagsProps = {
  tags: Array<TagType>;
};

const { memo } = React;
function CountTags({ tags }: CountTagsProps) {
  return (
    <Block>
      {tags.map((val, idx) => (
        <CountTag key={`${val}${idx}`} tag={val.name} count={val.count} />
      ))}
    </Block>
  );
}

const Block = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

export default memo(CountTags);
