import * as React from 'react';
import 'highlight.js';
import codeSyntaxHighlightPlugin from '@toast-ui/editor-plugin-code-syntax-highlight';

let Viewer: any = null;
if (typeof window !== 'undefined') {
  Viewer = require('@toast-ui/react-editor').Viewer;
}

type PostViewerProps = {
  content: string;
};

function PostViewer({ content }: PostViewerProps) {
  return (
    <>
      {typeof window === 'undefined' ? (
        <div dangerouslySetInnerHTML={{ __html: content }} />
      ) : (
        <Viewer initialValue={content} plugins={[codeSyntaxHighlightPlugin]} />
      )}
    </>
  );
}

export default PostViewer;
