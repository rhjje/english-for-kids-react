import { KeyboardEvent } from 'react';

export const useEscape = (callback: (event: KeyboardEvent) => void) => {
  const escape = (event: KeyboardEvent) => {
    if (
      event.key === 'Escape' ||
      event.code === 'Escape' ||
      event.keyCode === 27
    ) {
      callback(event);
    }
  };

  return { escape };
};
