import {createContext, useRef, useState} from 'react';

import ComHeader from 'comComponents/ComHeader';

import styled from 'styled-components';
import {LayoutWrap} from '../Layout/LayoutWrap';
import Navbar from '../Navbar';
import {NavBurger, SiteLogoBtn} from '@SpaceX/UI/Buttons';

const Header = styled(ComHeader)`
  z-index: 100;
  position: sticky;
  width: 100%;
  background-color: rgba(21, 10, 1, 0.21);
  border-block: 1px solid rgba(152, 147, 147, 0.21);
`;

const Wrap = styled(LayoutWrap)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderContext = createContext(null);

const HeaderSpaceX = () => {
  const rootRef = useRef();
  const [showNav, setShowNav] = useState(false);

  return (
    <HeaderContext.Provider value={{showNav, setShowNav}}>
      <Header ref={rootRef}>
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