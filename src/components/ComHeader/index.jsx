import {forwardRef, useEffect, useState} from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  top: ${({topValue}) => topValue}px;
  @media (orientation: portrait) {
    top: 0;
  }
`;

const ComHeader = forwardRef(({children, className}, ref) => {
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
    <StyledHeader topValue={headerTopValue} ref={ref} className={className}>
      {children}
    </StyledHeader>
  );
});

export default ComHeader;
