import {Outlet} from 'react-router-dom';
import HeaderSpaceX from '../Header';
import styled from 'styled-components';

const Body = styled.div`
  position: relative;
  height: 100vh;

  font-family: 'Museo Sans Cyrl', sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #fff;

  &::after {
    position: absolute;
    z-index: -1;
    content: '';
    background: url('img-space-x/planet.webp') 50% 50% / auto 61% no-repeat;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
  }
  &::before {
    top: 0;
    left: 0;
    position: fixed;
    content: '';
    z-index: -100;
    background: url('img-space-x/body_bcgrnd.webp') 50% 0 / auto 100% no-repeat,
      #000;
    width: 100%;
    height: 100%;
  }

  @media (max-width: 1199px) {
    &::after {
      display: none;
    }
  }
`;

const Layout = () => {
  return (
    <Body>
      <HeaderSpaceX />
      <Outlet />
    </Body>
  );
};

export * from './LayoutWrap';

export default Layout;
