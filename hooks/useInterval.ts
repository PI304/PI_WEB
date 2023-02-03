import { useEffect, useRef } from 'react';

export const useInterval = (callback: () => void, delay: null | number) => {
  const savedCallback = useRef<(() => void) | null>(null);

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    if (!delay && delay !== 0) {
      return;
    }
    function tick() {
      if (savedCallback.current) {
        savedCallback.current();
      }
    }

    const id = setInterval(tick, delay);
    return () => clearInterval(id);
  }, [delay]);
};
