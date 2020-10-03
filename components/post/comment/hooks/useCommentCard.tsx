import { useState, useCallback, SetStateAction } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { CONFIRM_PASSWORD } from '../../../../graphql/comment';

type useCommentCardHookProps = {
  comment_id: number;
  password: string;
  setShowEditPassword: React.Dispatch<SetStateAction<boolean>>;
};
type useCommentCardHook = {
  data?: { email?: string };
  editMode: boolean;
  setEditMode: React.Dispatch<React.SetStateAction<boolean>>;
  handleConfirmPassword: () => Promise<void>;
};
export default function useCommentCard({
  comment_id,
  password,
  setShowEditPassword,
}: useCommentCardHookProps): useCommentCardHook {
  const [editMode, setEditMode] = useState<boolean>(false);
  const confirmPassword = useQuery(CONFIRM_PASSWORD, {
    skip: true,
    fetchPolicy: 'network-only',
    variables: {
      comment_id,
      password,
    },
  });

  const handleConfirmPassword = useCallback(async () => {
    try {
      await confirmPassword.refetch();
      setEditMode(true);
      setShowEditPassword(false);
    } catch (e) {
      alert('잘못된 비밀번호입니다');
      setEditMode(false);
    }
  }, [password]);

  return {
    data: confirmPassword.data,
    editMode,
    setEditMode,
    handleConfirmPassword,
  };
}
