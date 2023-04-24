import styled from 'styled-components';
import {SVGDesktop} from '@Home/UI/SVGImages/screens';
import {Screen} from './Screen';

const Root = styled.div`
  @keyframes prevScreenHover {
    0% {
      box-shadow: rgba(255, 255, 255, 0.5) 0 0 15px 12px;
    }
    100% {
      box-shadow: rgba(255, 255, 255, 0.5) 0 0 10px 15px;
    }
  }

  position: relative;

  transition: 0.5s ease;
  transform-origin: center;
  transform: rotateY(35deg) scale(80%);

  .desktop {
    display: block;
    width: 100%;
    object-fit: contain;
  }

  &:hover {
    transform: none;

    .screen {
      overflow-y: overlay;
      animation: prevScreenHover 0.6s ease-in-out infinite alternate;
    }
    .btn-angle {
      opacity: 1;
    }
  }

  &:hover ~ .tablet {
    transform: translate(300%, 50%) scale(300%);
    opacity: 0;
    transition: 0.5s ease;
  }

  &:hover ~ .phone {
    transform: translate(300%, 50%) scale(300%);
    opacity: 0;
    transition: 0.5s ease;
  }

  @media (hover: none) {
    transform: none;

    .screen {
      overflow-y: overlay;
      animation: prevScreenHover 0.6s ease-in-out infinite alternate;
    }
  }
`;

const Desktop = ({className}) => {
  return (
    <Root className={className}>
      <SVGDesktop className="desktop" />
      <Screen className="screen" />
    </Root>
  );
};

export default Desktop;
