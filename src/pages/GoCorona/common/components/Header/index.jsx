import {useEffect, useRef, useState} from 'react';
import {Link, NavLink} from 'react-router-dom';
import {formatClassName} from '../../../../../utils/format';
import ButtonGoCorona from '../UI/ButtonGoCorona';
import css from './header.module.scss';
import ComBtn from '../../../../../common/components/ComBtn';
import ComHeader from '../../../../../common/components/ComHeader';
import {SVGSiteLogo} from '../../../img';

const Header = () => {
  const headerRef = useRef(null);
  const [display, setDisplay] = useState(false);
  const [currentScrollPos, setCurrentScrollPos] = useState(0);
  const [headerOpacity, setHeaderOpacity] = useState('0%');

  const toggleNav = () => setDisplay(!display);

  const menuDisplay = !display ? {} : {left: 0};

  const handleScroll = () => {
    setCurrentScrollPos(window.scrollY);

    if (currentScrollPos <= 80 && currentScrollPos > 15) {
      setHeaderOpacity(`${currentScrollPos * 1.125}%`);
    }
    if (currentScrollPos <= 15) {
      setHeaderOpacity(`0%`);
    }
    if (currentScrollPos > 80) {
      setHeaderOpacity(`90%`);
    }
  };

  const navStyle = ({isActive, isPending}) =>
    isPending
      ? formatClassName(css['link'], css['pending'])
      : isActive
      ? formatClassName(css['link'], css['active'])
      : css['link'];

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <ComHeader
      className={css['header']}
      style={{background: `rgb(255 255 255 / ${headerOpacity})`}}
      ref={headerRef}
    >
      <div className={css['container']}>
        <ComBtn to={'/'} className={css['logo']}>
          <SVGSiteLogo />
        </ComBtn>
        <div className={css['menu']}>
          <nav className={css['nav']} style={menuDisplay}>
            <NavLink to={'/gocorona'} className={navStyle}>
              HOME
            </NavLink>

            <Link to={'/'} className={css['link']}>
              FEATURES
            </Link>

            <Link to={'/'} className={css['link']}>
              SUPPORT
            </Link>

            <Link to={'/'} className={css['link']}>
              CONTACT US
            </Link>
          </nav>
        </div>
        <div className={css['button']}>
          <ButtonGoCorona blue>DOWNLOAD</ButtonGoCorona>
          <ComBtn onClick={toggleNav} className={css['icon-menu']}>
            <span></span>
          </ComBtn>
        </div>
      </div>
    </ComHeader>
  );
};

export default Header;
