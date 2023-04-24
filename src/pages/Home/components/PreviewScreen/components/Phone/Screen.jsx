import {useContext} from 'react';
import {Swiper, SwiperSlide} from '/node_modules/swiper/react/swiper-react.js';

import styled from 'styled-components';
import {Controller} from 'swiper';
import {SwiperContext} from '../../context';
import {getActiveSlides} from 'utils/slider';
import {swiperImgs} from '@Home/data/swiperImgs';

const Root = styled(Swiper)`
  height: 76%;
  width: 81%;
  margin-top: 23%;

  box-shadow: 0 0 4px 4px #ffffff78;

  img {
    height: 100%;
  }
`;

export const Screen = ({className}) => {
  const {setCtrldSwiperSide} = useContext(SwiperContext);
  return (
    <Root
      className={className}
      modules={[Controller]}
      onSwiper={setCtrldSwiperSide}
      loop
    >
      {getActiveSlides(swiperImgs, 'mobile').map(({id, src, alt}) => (
        <SwiperSlide key={id}>
          <img src={src} alt={alt} />
        </SwiperSlide>
      ))}
    </Root>
  );
};
