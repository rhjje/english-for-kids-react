import { useEffect, useCallback, RefObject } from 'react';

export const useEscape = (
  callback: (event: KeyboardEvent) => void,
  ref?: RefObject<HTMLElement>,
  stopPropagation: boolean = true,
) => {
  const escape = useCallback(
    (event: KeyboardEvent) => {
      if (
        event.key === 'Escape' ||
        event.code === 'Escape' ||
        event.keyCode === 27
      ) {
        stopPropagation && event.stopPropagation();
        callback(event);
      }
    },
    [callback, stopPropagation],
  );

  useEffect(() => {
    const element = ref?.current || document.documentElement;

    element?.addEventListener('keydown', escape);

    return () => element.removeEventListener('keydown', escape);
  }, [escape, ref]);
};
