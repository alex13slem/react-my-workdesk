import {Swiper, SwiperSlide} from '/node_modules/swiper/react/swiper-react.js';
import {SwiperContext} from '../../context';
import {Controller} from 'swiper';
import {getActiveSlides} from 'utils/slider';
import {swiperImgs} from '@Home/data/swiperImgs';
import styled from 'styled-components';
import {useContext} from 'react';

const Root = styled(Swiper)`
  height: 78%;
  width: 85%;
  margin-top: 15%;

  box-shadow: 0 0 4px 4px #ffffff78;

  img {
    height: 100%;
  }
`;

export const Screen = ({className}) => {
  const {ctrldSwiperSide, setCtrldSwiperMain} = useContext(SwiperContext);
  return (
    <Root
      className={className}
      modules={[Controller]}
      onSwiper={setCtrldSwiperMain}
      controller={{control: ctrldSwiperSide}}
      loop
    >
      {getActiveSlides(swiperImgs, 'tablet').map(({id, src, alt}) => (
        <SwiperSlide key={id}>
          <img src={src} alt={alt} />
        </SwiperSlide>
      ))}
    </Root>
  );
};
