import * as React from 'react';

export default function useRefFunc<T extends (...args: any[]) => any>(cb: T): T {
  const funcRef = React.useRef<T>();
  funcRef.current = cb;

  const cacheFn = React.useCallback((...args: any[]) => {
    return funcRef.current(...args);
  }, []);

  return cacheFn as any;
}
