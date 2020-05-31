import * as React from 'react';
import styled from 'styled-components';
import DefaultInput from '../../input/DefaultInput';
import useInputs from '../../../lib/hooks/useInputs';
import DefaultTextarea from '../../input/DefaultTextarea';
import useInput from '../../../lib/hooks/useInput';
import { useRouter } from 'next/dist/client/router';

type CommentWriteProps = {};

function CommentWrite(props: CommentWriteProps) {
  const router = useRouter();
  const post_id = router.query.id;
  const [state, onChange, onReset, dispatch] = useInputs({
    writer: '',
    password: '',
    comment: '',
  });

  return (
    <Block>
      <div className="user-info">
        <DefaultInput
          type="text"
          name="writer"
          placeholder="작성자"
          value={state.writer}
          handleChange={onChange}
        />
        <DefaultInput
          type="password"
          name="password"
          placeholder="비밀번호"
          value={state.password}
          handleChange={onChange}
        />
      </div>
      <div className="comment">
        <DefaultTextarea
          name="comment"
          value={state.comment}
          handleChange={onChange}
        />
      </div>
    </Block>
  );
}

const Block = styled.div`
  display: flex;
  flex-direction: column;
  .user-info {
    display: flex;
    flex-flow: row wrap;
  }
`;

export default CommentWrite;
