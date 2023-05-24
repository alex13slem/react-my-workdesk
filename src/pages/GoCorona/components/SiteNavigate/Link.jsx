import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  padding: 10px;
  font-family: 'Raleway';
  font-weight: 700;
  letter-spacing: 0.14em;
  color: #000000;
  font-size: 10px;
  line-height: 1.2;
  text-decoration: none;
  border-radius: 5px;

  transition: color 0.3s ease, background-color 0.3s ease;

  &.active {
    background-color: #ec5863;
    color: #fff;
  }
  &:not(.active) {
    &:hover {
      background-color: #ec586236;
    }
  }
  @media (max-width: 767.92px) {
    margin-right: 0px;
    margin-bottom: 25px;
    &:last-child {
      margin-bottom: 0;
    }
    color: #ec5863;
    font-size: 20px;
    &:hover {
      color: #d6535b;
    }
  }
`;

const Link = ({className, children, to}) => {
  return (
    <StyledLink to={to} className={className}>
      {children}
    </StyledLink>
  );
};

export default Link;
