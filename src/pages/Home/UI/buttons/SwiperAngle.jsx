import {faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {SwiperButtonNext, SwiperButtonPrev} from 'comComponents/swiper';
import styled, {css} from 'styled-components';

const commonCSS = css`
  opacity: 0;
  position: fixed;
  top: 34%;
  height: 50px;
  width: 50px;
  z-index: 2;
  background: transparent;

  transition: opacity 0.3s ease;

  @media (hover: none) {
    opacity: 1;
  }
  @media (max-width: 767.98px) {
    height: 25px;
    width: 25px;
  }

  .icon {
    height: inherit;
    color: var(--color1);
    filter: drop-shadow(0 0 4px rgba(0, 0, 0, 0.5));
  }
`;

const LeftArrow = styled(SwiperButtonPrev)`
  ${commonCSS}

  left: 5%;
  @media (max-width: 767.98px) {
    left: 7%;
  }
`;

const RightArrow = styled(SwiperButtonNext)`
  ${commonCSS}

  right: 5%;
  @media (max-width: 767.98px) {
    right: 7%;
  }
`;

export const SwiperAngle = ({className, direction}) => {
  switch (direction) {
    case 'left':
      return (
        <LeftArrow className={className}>
          <FontAwesomeIcon className="icon" icon={faAngleLeft} />
        </LeftArrow>
      );
    case 'right':
      return (
        <RightArrow className={className}>
          <FontAwesomeIcon className="icon" icon={faAngleRight} />
        </RightArrow>
      );

    default:
      return null;
  }
};
