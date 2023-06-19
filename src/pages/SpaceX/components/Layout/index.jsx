import {Outlet, useLocation} from 'react-router-dom';
import HeaderSpaceX from '../Header';
import styled from 'styled-components';
import {useSelectorStyle} from 'hooks/useSelectorStyle';
import TopPanel from '../TopPanel';
import {createContext, useState} from 'react';

const Body = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;

  main {
    flex: 1 1 100%;
  }

  font-family: 'Museo Sans Cyrl', sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #fff;

  &::before {
    top: 0;
    left: 0;
    position: fixed;
    content: '';
    z-index: -100;
    background: url('img-space-x/body_bcgrnd.webp') 50% 0 / auto 100% no-repeat,
      #000;
    width: 100vw;
    height: 100vh;
  }

  &::after {
    position: fixed;
    z-index: -1;
    content: '';
    background: url('img-space-x/planet.webp') 50% 50% / auto 61% no-repeat;
    width: 100vw;
    height: 100vh;
    top: 0px;
    left: 0px;
  }

  @media (max-width: 1199px) {
    &::after {
      display: none;
    }
  }
`;

export const LayoutContext = createContext({
  headerHeight: null,
  setHeaderHeight: () => {},
});

const Layout = ({className}) => {
  useSelectorStyle(
    ':root',
    `
  --sb-c-bg: #010d19;
  --sb-c-tb: #ce2934;
  `
  );

  const [headerHeight, setHeaderHeight] = useState(null);

  return (
    <LayoutContext.Provider value={{headerHeight, setHeaderHeight}}>
      <Body className={className}>
        <HeaderSpaceX />
        <Outlet />
      </Body>
    </LayoutContext.Provider>
  );
};

export * from './LayoutWrap';

export default Layout;
