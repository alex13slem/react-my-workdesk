import { React, useState } from 'react'

import css from './preview-screen.module.scss'
import './components/Swiper/swiper.scss'
import { swiperImgs } from './components/Swiper/data/swiperImgs'

import '/node_modules/swiper/swiper.scss'
import '/node_modules/swiper/modules/navigation/navigation.scss'
import '/node_modules/swiper/modules/effect-fade/effect-fade.scss'

import { EffectFade, Controller } from 'swiper'
import { Swiper, SwiperSlide } from '/node_modules/swiper/react/swiper-react.js'
import { SwiperButtonGo } from './components/Swiper/components/SwiperBtns'
import {
  SwiperButtonNext,
  SwiperButtonPrev
} from '../../../../common/components/Swiper/components/SwiperBtns'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

const PreviewScreen = ({ gridColumn, gridRow, alignSelf }) => {
  const [controlledSwiper1, setControlledSwiper1] = useState(null)
  const [controlledSwiper2, setControlledSwiper2] = useState(null)
  const activeSlides = (type) =>
    swiperImgs[type].filter((value) => value['active'] === true)

  return (
    <div
      className={css['preview']}
      style={{
        gridColumn,
        gridRow,
        alignSelf
      }}>
      <div className={css['desktop']}>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 760.999 647.5'>
          <path
            className='cls-1'
            fill='#d0d0d0'
            fillRule='evenodd'
            stroke='#1f1f1f'
            strokeWidth='3'
            d='M21.514 1.5h718a19.994 19.994 0 0 1 20 20v468a20 20 0 0 1-20 20h-718a20 20 0 0 1-20-20v-468a20 20 0 0 1 20-20z'
          />
          <path
            className='cls-2'
            fill='#1f1f1f'
            fillRule='evenodd'
            d='M35.514 34.5h690v434h-690v-434z'
          />
          <circle
            className='cls-3'
            fill='#1f1f1f'
            cx='380.499'
            cy='16.5'
            r='3'
          />
          <path
            className='cls-4'
            fill='#9d9d9d'
            fillRule='evenodd'
            stroke='#1f1f1f'
            strokeWidth='3'
            d='M303.527 510.01h156l8.42 82.95-172.606 1.08z'
          />
          <path
            className='cls-5'
            fill='#898989'
            fillRule='evenodd'
            stroke='#1f1f1f'
            strokeWidth='3'
            d='m295.429 592.39-2.381 21.99 177.761-.99-2.62-22.01z'
          />
          <path
            className='cls-6'
            fill='#a3a3a3'
            fillRule='evenodd'
            stroke='#1f1f1f'
            strokeWidth='3'
            d='m269.514 637.5 26-26 175 1 23 23-7 7-41 2h-116l-46.995-1z'
          />
          <path
            className='cls-2'
            fill='#1f1f1f'
            fillRule='evenodd'
            d='M269.514 637.5v7l9 2 61 1h100l48-1 9-5-4-5-6 6-19 2h-183z'
          />
        </svg>
        <Swiper
          controller={{ control: controlledSwiper1 }}
          className={css['screen']}
          modules={[EffectFade, Controller]}
          effect='fade'
          loop>
          {activeSlides('desktop').map(
            ({ id, src, alt, btnSizePos, navLink }) => (
              <SwiperSlide key={id} className={css['slide']}>
                <img src={src} alt={alt} />

                <SwiperButtonGo
                  className={css['btn-go']}
                  navLink={navLink}
                  style={btnSizePos}></SwiperButtonGo>
              </SwiperSlide>
            )
          )}
          <span slot='container-end'>
            <SwiperButtonPrev className={css['btn-prev']}>
              <FontAwesomeIcon
                style={{ height: 'inherit' }}
                icon={faAngleLeft}
              />
            </SwiperButtonPrev>
            <SwiperButtonNext className={css['btn-next']}>
              <FontAwesomeIcon
                style={{ height: 'inherit' }}
                icon={faAngleRight}
              />
            </SwiperButtonNext>
          </span>
        </Swiper>
      </div>
      <div className={css['tablet']}>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 444 655.56'>
          <rect
            className='cls-1'
            fill='#d0d0d0'
            stroke='#212121'
            strokeWidth='3'
            x='1.5'
            y='1.5'
            width='441'
            height='652.56'
            rx='34'
            ry='34'
          />
          <path
            className='cls-2'
            fill='#212121'
            fillRule='evenodd'
            d='M26 67.05h392.76v520.32H26V67.05z'
          />
          <circle
            className='cls-3'
            fill='none'
            stroke='#212121'
            strokeWidth='3'
            cx='222'
            cy='622.56'
            r='16'
          />
          <path
            className='cls-4'
            fill='none'
            stroke='#212121'
            d='M219.88 617.06h5a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3h-5a3 3 0 0 1-3-3v-5a3 3 0 0 1 3-3z'
          />
        </svg>
        <Swiper
          className={css['screen']}
          modules={[Controller]}
          onSwiper={setControlledSwiper1}
          controller={{ control: controlledSwiper2 }}
          loop>
          {activeSlides('tablet').map(({ id, src, alt }) => (
            <SwiperSlide key={id} className={css['slide']}>
              <img src={src} alt={alt} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className={css['phone']}>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 331.38 655.56'>
          <path
            className='cls-1'
            fill='#d0d0d0'
            fillRule='evenodd'
            stroke='#212121'
            strokeWidth='3'
            d='M35.51 1.5h260.37a34 34 0 0 1 34 34v584.56a34 34 0 0 1-34 34H35.51a34 34 0 0 1-34-34V35.5a34 34 0 0 1 34-34z'
          />
          <path
            className='cls-2'
            fill='#212121'
            fillRule='evenodd'
            d='M21.82 75.56h286.69v506.97H21.82V75.56z'
          />
          <circle
            className='cls-3'
            fill='#212121'
            cx='109.38'
            cy='40.56'
            r='4.5'
          />
          <rect
            className='cls-3'
            fill='#212121'
            x='136.88'
            y='38.06'
            width='57'
            height='4'
            rx='2'
            ry='2'
          />
          <path
            className='cls-4'
            fill='none'
            stroke='#212121'
            strokeWidth='3'
            d='M165.16 596.01a21.257 21.257 0 0 1 0 42.5c-11.44 0-20.72-9.52-20.72-21.25a20.99 20.99 0 0 1 20.72-21.25z'
          />
        </svg>
        <Swiper
          className={css['screen']}
          modules={[Controller]}
          onSwiper={setControlledSwiper2}
          loop>
          {activeSlides('mobile').map(({ id, src, alt }) => (
            <SwiperSlide key={id} className={css['slide']}>
              <img src={src} alt={alt} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default PreviewScreen
