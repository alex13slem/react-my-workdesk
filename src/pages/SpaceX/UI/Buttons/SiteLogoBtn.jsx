import ComBtn from 'comComponents/ComBtn';
import styled from 'styled-components';

const LogoBtn = styled(ComBtn)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 15px 10px 20px;

  border: 10px solid #fff;
  border-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 11 11' width='11' height='11'><g fill='%23fff'><rect width='1' height='5'/><rect y='6' width='1' height='5'/><rect x='10' y='6' width='1' height='5'/><rect x='10' width='1' height='5'/><rect width='5' height='1'/><rect y='10' width='5' height='1'/><rect x='6' y='10' width='5' height='1'/><rect x='6' width='5' height='1'/></g></svg>")
    5;
  transition: transform 0.3s ease;

  img {
    width: 100%;
    height: 100%;
  }

  &::after,
  &::before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  &::after {
    border-left: 1px solid rgba(152, 147, 147, 0.21);
    margin: 0 -10px;
  }
  &::before {
    border-right: 1px solid rgba(152, 147, 147, 0.21);
    margin: 0 10px;
  }
  &:hover {
    transform: scalex(101%);
  }

  @media (max-width: 767px) {
    padding: 10px 5px 15px;
    img {
      width: 140px;
    }
  }
`;

export const SiteLogoBtn = ({className}) => {
  return (
    <LogoBtn className={className}>
      <img src="img-space-x/spacex_logo.webp" alt="SpaceX" />
    </LogoBtn>
  );
};
