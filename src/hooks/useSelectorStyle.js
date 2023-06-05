import {useLayoutEffect} from 'react';

export const useSelectorStyle = (selector, cssText) => {
  const element = document.querySelector(selector);

  useLayoutEffect(() => {
    element.style.cssText = cssText;

    return () => {
      element.style.cssText = null;
    };
  }, []);
};
