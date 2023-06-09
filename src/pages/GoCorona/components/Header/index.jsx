import {useEffect, useRef, useState} from 'react';
import styled from 'styled-components';
import SiteNavigate from '../SiteNavigate';
import ComHeader from 'comComponents/ComHeader';
import ButtonGoCorona from '@GoCorona/UI/ButtonGoCorona';
import Logo from './Logo';
import Container from '@GoCorona/components/Container';
import Burger from '../SiteNavigate/Burger';
import {useScrollElemHide} from 'hooks';

const StyledHeader = styled.header`
  z-index: 50;

  position: fixed;
  top: 0;
  width: 100%;
`;

const StyledContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 114px;
  @media (max-width: 991.98px) {
    min-height: 80px;
  }

  .btn-download {
    margin-left: 122px;
    @media (max-width: 991.98px) {
      margin: 0;
    }
  }
`;

const Header = ({className}) => {
  const headerRef = useRef(null);
  const [visibleMenu, setVisibleMenu] = useState(false);
  const [currentScrollPos, setCurrentScrollPos] = useState(null);
  const [headerOpacity, setHeaderOpacity] = useState(0);

  const {elemTopValue: headerTopValue} = useScrollElemHide(headerRef);

  const handleScroll = () => {
    setCurrentScrollPos(window.scrollY);

    if (currentScrollPos <= 80 && currentScrollPos > 15) {
      setHeaderOpacity(currentScrollPos * 1.125);
    }
    if (currentScrollPos <= 15) {
      setHeaderOpacity(0);
    }
    if (currentScrollPos > 80) {
      setHeaderOpacity(90);
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
      className={className}
      ref={headerRef}
      style={{
        background: `rgb(255 255 255 / ${headerOpacity}%)`,
        top: headerTopValue + 'px',
      }}
      isFixed={visibleMenu}
    >
      <StyledContainer>
        <Logo />
        <SiteNavigate visible={visibleMenu} />
        <ButtonGoCorona blue className="btn-download">
          DOWNLOAD
        </ButtonGoCorona>
        <Burger visible={visibleMenu} handle={setVisibleMenu} />
      </StyledContainer>
    </StyledHeader>
  );
};

export default Header;
