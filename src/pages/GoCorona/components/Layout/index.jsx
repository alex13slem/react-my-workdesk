import {Outlet} from 'react-router-dom';
import Footer from '../Footer';
import Header from '../Header';
import styled from 'styled-components';

const Body = styled.div`
  display: flex;
  flex-direction: column;

  main {
    flex: 1 1 100%;
  }

  font-family: 'Rubik', sans-serif;
  font-size: 12px;
  color: #616161;
  background-color: #fff;
`;

const Layout = () => {
  return (
    <Body>
      <Header />

      <Outlet />

      <Footer />
    </Body>
  );
};

export default Layout;
