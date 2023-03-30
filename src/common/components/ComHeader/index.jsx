import React, {useEffect, useState} from 'react';

export const ComHeader = React.forwardRef(
  ({children, style, className}, ref) => {
    const headerHeight = ref.current?.scrollHeight;
    const [currentScrollPos, setCurrentScrollPos] = useState(0);
    const [prevScrollPos, setPrevScrollPos] = useState(1);
    const [headerTopValue, setHeaderTopValue] = useState(0);

    const handleScroll = () => {
      setCurrentScrollPos(window.scrollY);

      let scrollStep = headerTopValue - (currentScrollPos - prevScrollPos);

      if (scrollStep >= -headerHeight && scrollStep <= 0) {
        setHeaderTopValue(scrollStep);
      }

      if (scrollStep < -headerHeight) {
        setHeaderTopValue(-headerHeight);
      }

      if (scrollStep > 0) {
        setHeaderTopValue(0);
      }
      setPrevScrollPos(currentScrollPos);
    };

    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    });

    return (
      <header
        ref={ref}
        className={className}
        style={{...style, ...{top: headerTopValue}}}
      >
        {children}
      </header>
    );
  }
);
