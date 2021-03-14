import { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

const getQuery = (search: string) => {
  if (typeof window !== 'undefined') {
    return new URLSearchParams(search);
  }
  return new URLSearchParams();
};

const useQueryParam = (key: string, defaultValue?: string): [string, (val: string) => void] => {
  const history = useHistory();
  const { pathname, search } = useLocation();
  const queryValue = getQuery(search).get(key);
  const [queryParam, setQueryParam] = useState(queryValue || defaultValue || '');

  useEffect(() => {
    const query = getQuery(search);

    if (queryParam.trim() !== '') {
      query.set(key, queryParam);
    } else {
      query.delete(key);
    }

    history.push(`${pathname}?${query.toString()}`);
  }, [queryParam, key, search, history, pathname]);

  return [queryParam, setQueryParam];
};

export default useQueryParam;
