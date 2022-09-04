import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

const useQuery = (key: string) => {
  const [searchParams] = useSearchParams();

  return useMemo(() => searchParams.get(key), [key, searchParams]);
};

export default useQuery;
