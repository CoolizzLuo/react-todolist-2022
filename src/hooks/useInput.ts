import { useState, useCallback } from 'react';

const useInput = (initialValue?: string) => {
  const [value, setValue] = useState<string>(initialValue || '');
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value), []);
  const handleEscKey = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => e.key === 'Escape' && setValue(''),
    []
  );

  return { value, setValue, handleChange, handleEscKey } as const;
};

export default useInput;
