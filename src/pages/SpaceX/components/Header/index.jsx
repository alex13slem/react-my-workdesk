import {createContext, useRef, useState} from 'react';

import styled from 'styled-components';
import {LayoutWrap} from '../Layout/LayoutWrap';
import Navbar from '../Navbar';
import {NavBurger, SiteLogoBtn} from '@SpaceX/UI/Buttons';
import {useScrollElemHide} from 'hooks';
import {useEffect} from 'react';
import {useHeaderValues} from '@SpaceX/store';

const Header = styled.header`
  @media (orientation: portrait) {
    top: 0;
  }
  z-index: 100;
  position: sticky;
  /* width: 100vw; */

  background-color: rgba(21, 10, 1, 0.21);
  border-block: 1px solid rgba(152, 147, 147, 0.21);

  backdrop-filter: blur(8px) hue-rotate(338deg);
`;

const Wrap = styled(LayoutWrap)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderContext = createContext({
  showNav: false,
  setShowNav: () => {},
});

const HeaderSpaceX = ({className}) => {
  const rootRef = useRef();
  const rootHeight = rootRef.current?.scrollHeight;
  const [showNav, setShowNav] = useState(false);

  const [topValue, reverseTopValue] = useScrollElemHide(rootHeight, {
    offsetStep: -1,
  });

  const {setReverseTop, setHeight} = useHeaderValues();

  useEffect(() => {
    setReverseTop(reverseTopValue);
  }, [reverseTopValue]);

  useEffect(() => {
    rootHeight && setHeight(rootHeight);
  }, [rootHeight]);

  return (
    <HeaderContext.Provider value={{showNav, setShowNav}}>
      <Header
        ref={rootRef}
        className={className}
        style={{top: topValue + 'px'}}
      >
        <Wrap>
          <SiteLogoBtn />
          <NavBurger />
          <Navbar showNav={showNav} />
        </Wrap>
      </Header>
    </HeaderContext.Provider>
  );
};

export default HeaderSpaceX;
