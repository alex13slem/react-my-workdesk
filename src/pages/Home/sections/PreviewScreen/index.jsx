import {React, useState} from 'react';

import {swiperImgs} from './components/Swiper/data/swiperImgs';

import css from './style.module.scss';
import './components/Swiper/swiper.scss';

import '/node_modules/swiper/swiper.scss';
import '/node_modules/swiper/modules/navigation/navigation.scss';
import '/node_modules/swiper/modules/effect-fade/effect-fade.scss';

import {EffectFade, Controller} from 'swiper';
import {Swiper, SwiperSlide} from '/node_modules/swiper/react/swiper-react.js';
import {SwiperButtonGo} from './components/Swiper/components/SwiperBtns';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons';
import {SVGDesktop, SVGPhone, SVGTablet} from '../../img/screens';
import {formatClassName} from '../../../../utils';
import {
  SwiperButtonNext,
  SwiperButtonPrev,
} from '../../../../common/components/swiper/SwiperBtns';

const PreviewScreen = ({className}) => {
  const [controlledSwiperMain, setControlledSwiperMain] = useState({});
  const [controlledSwiperSide, setControlledSwiperSide] =
    useState(controlledSwiperMain);
  const activeSlides = (type) =>
    swiperImgs[type].filter((value) => value['active'] === true);

  return (
    <section className={formatClassName(className, css['root'])}>
      <div className={css['desktop']}>
        <SVGDesktop />
        <Swiper
          controller={{control: controlledSwiperMain}}
          className={css['screen']}
          modules={[EffectFade, Controller]}
          effect="fade"
          loop
        >
          {activeSlides('desktop').map(
            ({id, src, alt, btnSizePos, navLink}) => (
              <SwiperSlide key={id} className={css['slide']}>
                <img src={src} alt={alt} />

                <SwiperButtonGo
                  className={css['btn-go']}
                  navLink={navLink}
                  style={btnSizePos}
                ></SwiperButtonGo>
              </SwiperSlide>
            )
          )}
          <span slot="container-end">
            <SwiperButtonPrev className={css['btn-prev']}>
              <FontAwesomeIcon style={{height: 'inherit'}} icon={faAngleLeft} />
            </SwiperButtonPrev>
            <SwiperButtonNext className={css['btn-next']}>
              <FontAwesomeIcon
                style={{height: 'inherit'}}
                icon={faAngleRight}
              />
            </SwiperButtonNext>
          </span>
        </Swiper>
      </div>
      <div className={css['tablet']}>
        <SVGTablet />
        <Swiper
          className={css['screen']}
          modules={[Controller]}
          onSwiper={setControlledSwiperMain}
          controller={{control: controlledSwiperSide}}
          loop
        >
          {activeSlides('tablet').map(({id, src, alt}) => (
            <SwiperSlide key={id} className={css['slide']}>
              <img src={src} alt={alt} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className={css['phone']}>
        <SVGPhone />
        <Swiper
          className={css['screen']}
          modules={[Controller]}
          onSwiper={setControlledSwiperSide}
          loop
        >
          {activeSlides('mobile').map(({id, src, alt}) => (
            <SwiperSlide key={id} className={css['slide']}>
              <img src={src} alt={alt} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default PreviewScreen;
