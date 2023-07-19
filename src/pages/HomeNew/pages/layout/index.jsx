import {Outlet} from 'react-router-dom';
import styled from 'styled-components';
import {varsCss} from './varsCss';

const Body = styled.div`
  ${varsCss}

  display: flex;
  flex-direction: column;

  main {
    flex: 1 1 100%;
  }

  font-family: var(--font-main);
  font-size: 14px;
  color: var(--color-l-grey);
  background-color: var(--color-bg);
`;

const Layout = () => {
  return (
    <Body>
      <Outlet />
    </Body>
  );
};

export default Layout;
