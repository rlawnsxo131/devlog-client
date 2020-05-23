import * as React from 'react';
import styled from 'styled-components';
import BlockTag from './BlockTag';
import { TagType } from '../../graphql/tag';

type BlockTagsProps = {
  tags: Array<TagType>;
};

const { memo } = React;
function BlockTags({ tags }: BlockTagsProps) {
  return (
    <Block>
      {tags.map((val, idx) => (
        <BlockTag key={`${val}${idx}`} tag={val.name} count={val.count} />
      ))}
    </Block>
  );
}

const Block = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

export default memo(BlockTags);
