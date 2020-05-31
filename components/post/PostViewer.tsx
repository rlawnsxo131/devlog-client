import * as React from 'react';
import 'highlight.js';
import codeSyntaxHighlightPlugin from '@toast-ui/editor-plugin-code-syntax-highlight';
import styled from 'styled-components';

let Viewer: any = null;
if (typeof window !== 'undefined') {
  Viewer = require('@toast-ui/react-editor').Viewer;
}

type PostViewerProps = {
  content: string;
};

function PostViewer({ content }: PostViewerProps) {
  return (
    <Block>
      {typeof window === 'undefined' ? (
        <div dangerouslySetInnerHTML={{ __html: content }} />
      ) : (
        <Viewer initialValue={content} plugins={[codeSyntaxHighlightPlugin]} />
      )}
    </Block>
  );
}

const Block = styled.div`
  display: flex;
  flex-flow: row wrap;
  overflow: auto;
`;

export default PostViewer;
