import {SwiperContext} from '../../context';
import {Controller, EffectFade} from 'swiper';
import {Swiper, SwiperSlide} from '/node_modules/swiper/react/swiper-react.js';
import {getActiveSlides} from 'utils/slider';
import {swiperImgs} from '@Home/data/swiperImgs';
import {SwiperLink, SwiperAngle} from '@Home/UI/buttons';
import {useContext} from 'react';
import styled from 'styled-components';

const Root = styled(Swiper)`
  position: absolute;
  width: 90%;
  height: 66.5%;
  top: 5.6%;
  left: 4.9%;

  overflow: hidden;
  box-shadow: 0px 0px 6px 0px rgba(30, 52, 69, 0.87) inset;

  img {
    width: 100%;
  }

  &::-webkit-scrollbar {
    width: 7px;
    background-color: rgba(255, 255, 255, 0.233);
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.836);
    border-radius: 5px;
    border: solid 1px rgba(0, 0, 0, 0.541);
  }

  @media (hover: none) {
    overflow-y: overlay;
    animation: prevScreenHover 0.6s ease-in-out infinite alternate;
  }
`;

export const Screen = ({className}) => {
  const {ctrldSwiperMain} = useContext(SwiperContext);
  return (
    <Root
      controller={{control: ctrldSwiperMain}}
      className={className}
      modules={[EffectFade, Controller]}
      effect="fade"
      loop
    >
      {getActiveSlides(swiperImgs, 'desktop').map(
        ({id, src, alt, sizeAndPos, navLink}) => (
          <SwiperSlide key={id}>
            <img src={src} alt={alt} />

            <SwiperLink to={navLink} sizeAndPos={sizeAndPos}></SwiperLink>
          </SwiperSlide>
        )
      )}
      <span slot="container-end">
        <SwiperAngle direction="left" className="btn-angle" />
        <SwiperAngle direction="right" className="btn-angle" />
      </span>
    </Root>
  );
};
