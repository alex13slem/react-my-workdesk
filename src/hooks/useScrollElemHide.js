import {useState} from 'react';
import {useEffect} from 'react';

export const useScrollElemHide = (
  ref,
  settings = {
    isFixed: false,
    offsetStep: 0,
  }
) => {
  const elemHeight = ref.current?.scrollHeight;
  const [currentScrollPos, setCurrentScrollPos] = useState(null);
  const [prevScrollPos, setPrevScrollPos] = useState(null);
  const [elemTopValue, setElemTopValue] = useState(0);

  const handleScroll = () => {
    setCurrentScrollPos(window.scrollY);
    setPrevScrollPos(currentScrollPos);

    const scrollStep = elemTopValue - (currentScrollPos - prevScrollPos);

    if (settings.isFixed || scrollStep > 0) {
      setElemTopValue(0);
      return;
    }
    if (scrollStep >= -elemHeight && scrollStep <= 0) {
      setElemTopValue(scrollStep + settings.offsetStep);
      return;
    }
    if (scrollStep < -elemHeight) {
      setElemTopValue(-elemHeight + settings.offsetStep);
      return;
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return {elemTopValue, elemHeight};
};
