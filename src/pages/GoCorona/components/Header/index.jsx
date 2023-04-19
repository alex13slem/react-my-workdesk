import {useEffect, useRef, useState} from 'react';
import ComBtn from 'comComponents/ComBtn';
import css from './style.module.scss';
import styled from 'styled-components';
import SiteNavigate from '../SiteNavigate';
import ComHeader from 'comComponents/ComHeader';
import ButtonGoCorona from '@GoCorona/UI/ButtonGoCorona';
import {SVGSiteLogo} from '@GoCorona/UI/SVGimages';

const StyledHeader = styled(ComHeader)`
  background: rgb(255 255 255 / ${({opacity}) => opacity}%);
`;

const Header = () => {
  const headerRef = useRef(null);
  const [visibleMenu, setVisibleMenu] = useState(false);
  const [currentScrollPos, setCurrentScrollPos] = useState(null);
  const [headerOpacity, setHeaderOpacity] = useState(0);

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
      opacity={headerOpacity}
      className={css['header']}
      ref={headerRef}
    >
      <div className={css['container']}>
        <ComBtn to={'/'} className={css['logo']}>
          <SVGSiteLogo />
        </ComBtn>
        <div className={css['menu']}>
          <SiteNavigate visible={visibleMenu} />
        </div>
        <div className={css['button']}>
          <ButtonGoCorona blue>DOWNLOAD</ButtonGoCorona>
          <ComBtn
            onClick={() => setVisibleMenu(!visibleMenu)}
            className={css['icon-menu']}
          >
            <span></span>
          </ComBtn>
        </div>
      </div>
    </StyledHeader>
  );
};

export default Header;
