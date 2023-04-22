import {useContext} from 'react';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars, faXmark} from '@fortawesome/free-solid-svg-icons';
import {HeaderContext} from '@SpaceX/components/Header';

const Button = styled.button`
  z-index: 100;
  position: relative;
  display: none;

  svg {
    width: 74px;
    height: 74px;
  }

  color: #fff;
  transition: color 0.3s ease;

  &:active {
    color: #b1b1b1;
  }

  @media (max-width: 1199px) {
    display: flex;

    ${({showNav}) =>
      showNav &&
      `
			position: fixed;
        right: 16px;
		`}

    svg {
      height: 60px;
      width: 60px;
    }
  }

  @media (max-width: 767px) {
    svg {
      height: 45px;
      width: 45px;
    }
  }
`;

export const NavBurger = () => {
  const {showNav, setShowNav} = useContext(HeaderContext);

  return (
    <Button onClick={() => setShowNav(!showNav)}>
      {!showNav ? (
        <FontAwesomeIcon icon={faBars} />
      ) : (
        <FontAwesomeIcon icon={faXmark} />
      )}
    </Button>
  );
};
