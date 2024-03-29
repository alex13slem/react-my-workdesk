import styled from 'styled-components';

import links from '@SpaceX/data/headerLinks.json';
import {useContext} from 'react';
import {HeaderContext} from '../Header';
import {NavLink} from '@SpaceX/UI/Buttons';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;

  transition: opacity 0.5s ease-in-out;

  @media (max-width: 1199px) {
    opacity: 0;
    pointer-events: none;

    position: fixed;
    inset: 0;
    height: 100vh;

    flex-direction: column;
    justify-content: center;
    font-size: 5vh;

    background-color: #000000e6;

    ${({showNav}) =>
      showNav &&
      `opacity: 1;
      pointer-events: all;
      overflow: hidden;
      `}
  }
`;

const Navbar = ({className}) => {
  const {showNav, setShowNav} = useContext(HeaderContext);
  return (
    <Nav className={className} showNav={showNav}>
      {links.map(({id, link, text}) => (
        <NavLink
          key={id}
          navigate
          to={link}
          onClick={() => setShowNav(false)}
          end
        >
          {text}
        </NavLink>
      ))}
    </Nav>
  );
};

export default Navbar;
