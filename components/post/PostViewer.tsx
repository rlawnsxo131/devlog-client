import * as React from 'react';
import 'highlight.js';
import codeSyntaxHighlightPlugin from '@toast-ui/editor-plugin-code-syntax-highlight';
import styled from 'styled-components';
import media from '../../lib/styles/media';
import palette from '../../lib/styles/palette';

let Viewer: any = null;
let colorSyntaxPlugin: any = null;
if (typeof window !== 'undefined') {
  colorSyntaxPlugin = require('@toast-ui/editor-plugin-color-syntax');
  Viewer = require('@toast-ui/react-editor').Viewer;
}

type PostViewerProps = {
  content: string;
};

const { memo } = React;
function PostViewer({ content }: PostViewerProps) {
  return (
    <Block>
      {typeof window === 'undefined' ? (
        <p className="fallback">{content}</p>
      ) : (
        <Viewer
          initialValue={content}
          plugins={[codeSyntaxHighlightPlugin, colorSyntaxPlugin]}
        />
      )}
    </Block>
  );
}

const Block = styled.div`
  display: flex;
  flex-flow: row wrap;
  .fallback {
    display: none;
  }
  .tui-editor-contents {
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    span {
      border-bottom: none;
      font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue',
        'Apple SD Gothic Neo', 'Malgun Gothic', '맑은 고딕', 나눔고딕,
        'Nanum Gothic', 'Noto Sans KR', 'Noto Sans CJK KR', arial, 돋움, Dotum,
        Tahoma, Geneva, sans-serif;
    }
    blockquote {
      padding: 0.5rem 1rem 0.5rem 1rem;
      background: ${palette.gray0};
      border-left: 4px solid ${palette.pink5};
      & > * {
        color: ${palette.gray9};
      }
    }
    pre {
      overflow-x: auto;
      background: rgb(251, 252, 253);
      code {
        white-space: unset;
      }
      code > * {
        font-family: Consolas, Courier, 'Apple SD 산돌고딕 Neo', -apple-system,
          'Lucida Grande', 'Apple SD Gothic Neo', '맑은 고딕', 'Malgun Gothic',
          'Segoe UI', '돋움', dotum, sans-serif;
      }
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
  }
`;

export default memo(PostViewer);
