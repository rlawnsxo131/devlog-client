import * as React from 'react';
import 'highlight.js';
import codeSyntaxHighlightPlugin from '@toast-ui/editor-plugin-code-syntax-highlight';
import styled from 'styled-components';
import media from '../../lib/styles/media';

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
  .tui-editor-contents {
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      border-bottom: none;
    }

    p,
    code {
      ${media.xsmall} {
        font-size: 0.75rem;
      }

      ${media.medium} {
        font-size: 0.875rem;
      }

      ${media.xlarge} {
        font-size: 1rem;
      }
    }

    pre {
      background: rgb(251, 252, 253);
    }
  }
`;

export default PostViewer;
