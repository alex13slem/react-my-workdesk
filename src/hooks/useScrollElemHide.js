import {useState} from 'react';
import {useEffect} from 'react';

export const useScrollElemHide = (
  elemHeight,
  settings = {isFixed: false, offsetStep: 0}
) => {
  const isFixed = settings.isFixed || false;
  const offsetStep = settings.offsetStep || 0;
  const [currentScrollPos, setCurrentScrollPos] = useState(0);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [elemTopValue, setElemTopValue] = useState(0);

  const handleScroll = () => {
    setCurrentScrollPos(window.scrollY);
    setPrevScrollPos(currentScrollPos);

    const scrollStep = elemTopValue - (currentScrollPos - prevScrollPos);

    if (isFixed || scrollStep > 0) {
      setElemTopValue(0);
      return;
    }
    if (scrollStep >= -elemHeight && scrollStep <= 0) {
      setElemTopValue(scrollStep);
      return;
    }
    if (scrollStep < -elemHeight) {
      setElemTopValue(-elemHeight + offsetStep);
      return;
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return elemTopValue;
};
