import { useEffect, useRef } from 'react';

export default function useInterval(callback: Function, delay: number) {
  const savedCallback = useRef<{ callback?: Function }>({});

  useEffect(() => {
    savedCallback.current.callback = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current.callback?.();
    }

    if (delay !== null) {
      const interval = setInterval(tick, delay);

      return () => clearInterval(interval);
    }
  }, [delay]);
}
