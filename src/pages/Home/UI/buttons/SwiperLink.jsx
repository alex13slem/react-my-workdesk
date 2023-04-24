import styled from 'styled-components';
import {useSwiperSlide} from '/node_modules/swiper/react/swiper-react.js';
import ComBtn from 'comComponents/ComBtn';

const Link = styled(ComBtn)`
  @keyframes btn-go {
    0%,
    100% {
      box-shadow: 0 0 4px 1px var(--color2);
    }
    50% {
      box-shadow: 0 0 4px 3px var(--color2);
    }
  }

  position: absolute;

  border-radius: 8px;
  background: transparent;

  opacity: 0;
  animation: btn-go 1s ease infinite;

  &:hover {
    animation: none;
    box-shadow: 0 0 5px 5px var(--color2);
  }
  &:active {
    animation: none;
    box-shadow: 0 0 4px 3px var(--color2);
  }

  ${({$active}) =>
    $active &&
    `
    opacity: 1; 
    transition: opacity .3s ease;
  `}
  ${({$sizeAndPos: {bottom, left, width, height}}) =>
    `
    bottom: ${bottom}; 
    left: ${left}; 
    width: ${width}; 
    height: ${height}; 
  `}
`;

export const SwiperLink = ({children, className, sizeAndPos, ...props}) => {
  const swiperSlide = useSwiperSlide();
  return (
    <Link
      className={className}
      $sizeAndPos={sizeAndPos}
      $active={swiperSlide?.isActive}
      {...props}
    >
      {children}
    </Link>
  );
};
