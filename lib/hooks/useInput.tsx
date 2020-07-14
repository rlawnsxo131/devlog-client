import { useState, useCallback } from 'react';

export default function useInput(initialState: string) {
  const [state, setState] = useState(initialState);
  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setState((state) => e.target.value);
    },
    [],
  );
  const onReset = useCallback(() => setState(''), []);
  return [state, onChange, onReset] as [
    string,
    typeof onChange,
    typeof onReset,
  ];
}
