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
  .tui-editor-contents {
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      border-bottom: none;
    }
    ${media.xsmall} {
      width: calc(100vw - 6vw);
      h1 {
        font-weight: bold;
        font-size: 1.25rem;
      }
      h2 {
        font-weight: bold;
        font-size: 1.125rem;
      }
      h3 {
        font-weight: bold;
        font-size: 1rem;
      }
      span,
      p,
      code {
        font-size: 0.85rem;
      }
    }

    ${media.small} {
      width: 43rem;
    }

    ${media.medium} {
      width: 47rem;
      h1 {
        font-size: 1.5rem;
      }
      h2 {
        font-size: 1.25rem;
      }
      h3 {
        font-size: 1.125rem;
      }
      span,
      p,
      code {
        font-size: 0.875rem;
      }
    }

    ${media.large} {
      width: 63rem;
      h1 {
        font-size: 1.725rem;
      }
      h2 {
        font-size: 1.5rem;
      }
      h3 {
        font-size: 1.25rem;
      }
      span,
      p,
      code {
        font-size: 1rem;
      }
    }

    pre {
      background: rgb(251, 252, 253);
    }
  }
`;

export default PostViewer;
