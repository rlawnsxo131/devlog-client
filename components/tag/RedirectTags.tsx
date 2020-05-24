import * as React from 'react';
import styled from 'styled-components';
import RedirectTag from './RedirectTag';
import { TagType } from '../../graphql/tag';

type RedirectTagsProps = {
  tags: Array<TagType>;
};

const { memo } = React;
function RedirectTags({ tags }: RedirectTagsProps) {
  return (
    <Block>
      {tags.map((val, idx) => (
        <RedirectTag key={`${val}${idx}`} tag={val.name} count={val.count} />
      ))}
    </Block>
  );
}

const Block = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

export default memo(RedirectTags);
