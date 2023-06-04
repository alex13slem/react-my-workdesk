import {useLayoutEffect} from 'react';

export const useRootStyle = (cssText) => {
  useLayoutEffect(() => {
    document.querySelector(':root').style.cssText = cssText;

    return () => {
      document.querySelector(':root').style.cssText = null;
    };
  }, []);
};
