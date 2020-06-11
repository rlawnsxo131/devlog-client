import { useCallback } from 'react';
import { useRouter } from 'next/dist/client/router';

type CountType = {
  redirectTagPosts: (e: React.MouseEvent) => void;
};

export default function tagsRedirect({ tag }: { tag: string }): CountType {
  const router = useRouter();
  const redirectTagPosts = useCallback((e) => {
    e.stopPropagation();
    router.push('/posts/[tag]', `/posts/${tag}`);
  }, []);

  return {
    redirectTagPosts,
  };
}
