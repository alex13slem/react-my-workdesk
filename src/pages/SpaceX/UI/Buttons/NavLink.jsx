import ComBtn from 'comComponents/ComBtn';
import styled from 'styled-components';

const Button = styled(ComBtn)`
  position: relative;

  color: #fff;
  font-weight: 300;
  transition: color 0.3s ease;
  &::after {
    position: absolute;
    opacity: 0;
    content: '';
    width: 100%;
    left: 0;
    bottom: 0;
    height: 1px;
    background: rgba(152, 147, 147, 0.21);
    transform: scaleX(200%) translateY(15px);
    transition: 0.3s ease;
    transition-property: transform, opacity;
  }
  &.active,
  &:hover {
    &::after {
      transform: scaleX(100%) translateY(3px);
      opacity: 1;
    }
  }
  &.active {
    color: #e4e4e4;
  }
  &:hover:not(&.active) {
    color: #b1b1b1;
  }
`;

export const NavLink = ({id, link, children, className, ...props}) => {
  return (
    <Button className={className} navigate to={link} {...props}>
      {children}
    </Button>
  );
};
