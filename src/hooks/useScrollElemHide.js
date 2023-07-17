import {useState} from 'react';
import {useEffect} from 'react';

export const useScrollElemHide = (elemHeight, settings = {isFixed: false}) => {
  const [currentScrollPos, setCurrentScrollPos] = useState(0);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [topValue, setTopValue] = useState(0);
  const [reverseTopValue, setReverseTopValue] = useState(0);

  const handleScroll = () => {
    setCurrentScrollPos(window.scrollY);
    setPrevScrollPos(currentScrollPos);

    // const scrollStep = currentTopValue - (currentScrollPos - prevScrollPos);
    const scrollStep = currentScrollPos - prevScrollPos;

    const currentTopValue = topValue - scrollStep;

    if (settings.isFixed || currentTopValue > 0) {
      setTopValue(0);
      setReverseTopValue(elemHeight);
      return;
    }
    if (currentTopValue >= -elemHeight && currentTopValue <= 0) {
      setTopValue(currentTopValue);
      setReverseTopValue(currentTopValue + elemHeight);
      return;
    }
    if (currentTopValue < -elemHeight) {
      setTopValue(-elemHeight);
      setReverseTopValue(0);
      return;
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return [topValue, reverseTopValue];
};
