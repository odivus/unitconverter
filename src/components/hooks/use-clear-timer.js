import { useEffect } from 'react';

export function useClearTimer(timer) {
  useEffect(() => {
    if (!timer) return;

    return () => window.clearTimeout(timer);
  }, [timer]);
}