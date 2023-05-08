import {forwardRef, useEffect, useState} from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  @media (orientation: portrait) {
    top: 0;
  }
`;

const ComHeader = forwardRef(({children, className, style}, ref) => {
  const headerHeight = ref.current?.scrollHeight;
  const [currentScrollPos, setCurrentScrollPos] = useState(null);
  const [prevScrollPos, setPrevScrollPos] = useState(null);
  const [headerTopValue, setHeaderTopValue] = useState(0);

  const handleScroll = () => {
    setCurrentScrollPos(window.scrollY);
    setPrevScrollPos(currentScrollPos);

    const scrollStep = headerTopValue - (currentScrollPos - prevScrollPos);

    if (scrollStep >= -headerHeight && scrollStep <= 0) {
      setHeaderTopValue(scrollStep);
    }
    if (scrollStep < -headerHeight) {
      setHeaderTopValue(-headerHeight);
    }
    if (scrollStep > 0) {
      setHeaderTopValue(0);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <StyledHeader
      ref={ref}
      className={className}
      style={{...style, top: headerTopValue + 'px'}}
    >
      {children}
    </StyledHeader>
  );
});

export default ComHeader;
