import { useEffect } from 'react';

export function useBodyStyle(style) {
  useEffect(() => {
    for (var key in style) {
      window.document.body.style[key] = style[key];
      window.document.documentElement.style[key] = style[key];
    }
    return () => {
      window.document.body.style[key] = '';
      window.document.documentElement.style[key] = '';
    }
  }, [style])
}