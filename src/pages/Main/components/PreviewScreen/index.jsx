import { useEffect, useRef } from 'react'

import css from './preview-screen.module.scss'

import './components/Swiper/swiper.scss'

import { Navigation, Pagination, EffectCube, EffectFade } from 'swiper'
import {
  Swiper,
  SwiperSlide,
  useSwiperSlide
} from '/node_modules/swiper/react/swiper-react.js'

import '/node_modules/swiper/swiper.scss'
import '/node_modules/swiper/modules/navigation/navigation.scss'
import '/node_modules/swiper/modules/pagination/pagination.scss'
import '/node_modules/swiper/modules/effect-cube/effect-cube.scss'
import '/node_modules/swiper/modules/effect-fade/effect-fade.scss'

import galactDesk from './img/desktop/Galactigun.jpg'
import coronaDesk from './img/desktop/GoCorona.jpg'
import spaceXDesk from './img/desktop/SpaceX.jpg'
import zapovDesk from './img/desktop/Zapovednik.jpg'
import uberDesk from './img/desktop/Uber.jpg'

const PreviewScreen = ({ gridColumn, gridRow, alignSelf }) => {
  const swiperImgs = {
    desktop: [
      {
        id: 1,
        src: galactDesk,
        alt: 'Galactigun',
        btnSizePos: {
          bottom: '39.5%',
          left: '11.8%',
          width: '37.6%',
          height: '12.7%'
        }
      },
      {
        id: 2,
        src: coronaDesk,
        alt: 'GoCorona',
        btnSizePos: {
          bottom: '39.5%',
          left: '11.8%',
          width: '31%',
          height: '12.7%'
        }
      },
      {
        id: 3,
        src: spaceXDesk,
        alt: 'SpaceX',
        btnSizePos: {
          bottom: '39.5%',
          left: '11.8%',
          width: '31%',
          height: '12.7%'
        }
      },
      {
        id: 4,
        src: zapovDesk,
        alt: 'Zapovednik',
        btnSizePos: {
          bottom: '26.8%',
          left: '11.7%',
          width: '11.8%',
          height: '26%'
        }
      },
      {
        id: 5,
        src: uberDesk,
        alt: 'UberEats',
        btnSizePos: {
          bottom: '39.5%',
          left: '11.7%',
          width: '37.9%',
          height: '12.7%'
        }
      }
    ]
  }

  const swiperSlide = useSwiperSlide()

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
            fill-rule='evenodd'
            stroke='#1f1f1f'
            stroke-width='3'
            d='M21.514 1.5h718a19.994 19.994 0 0 1 20 20v468a20 20 0 0 1-20 20h-718a20 20 0 0 1-20-20v-468a20 20 0 0 1 20-20z'
          />
          <path
            className='cls-2'
            fill='#1f1f1f'
            fill-rule='evenodd'
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
            fill-rule='evenodd'
            stroke='#1f1f1f'
            stroke-width='3'
            d='M303.527 510.01h156l8.42 82.95-172.606 1.08z'
          />
          <path
            className='cls-5'
            fill='#898989'
            fill-rule='evenodd'
            stroke='#1f1f1f'
            stroke-width='3'
            d='m295.429 592.39-2.381 21.99 177.761-.99-2.62-22.01z'
          />
          <path
            className='cls-6'
            fill='#a3a3a3'
            fill-rule='evenodd'
            stroke='#1f1f1f'
            stroke-width='3'
            d='m269.514 637.5 26-26 175 1 23 23-7 7-41 2h-116l-46.995-1z'
          />
          <path
            className='cls-2'
            fill='#1f1f1f'
            fill-rule='evenodd'
            d='M269.514 637.5v7l9 2 61 1h100l48-1 9-5-4-5-6 6-19 2h-183z'
          />
        </svg>

        <Swiper
          className={css['screen']}
          modules={[Navigation, EffectFade]}
          effect='fade'
          loop>
          {swiperImgs.desktop.map(({ id, src, alt, btnSizePos }) => (
            <SwiperSlide key={id} className={css['slide']}>
              <img src={src} alt={alt} />
              <button className={css['btn']} style={btnSizePos}></button>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* <div className='swiper-button-prev'></div>
        <div className='swiper-button-next'></div> */}
      </div>
      <div className={css['tablet']}>
        <svg
          className={css['screen']}
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 444 655.56'>
          <rect
            className='cls-1'
            fill='#d0d0d0'
            stroke='#212121'
            stroke-width='3'
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
            fill-rule='evenodd'
            d='M26 67.05h392.76v520.32H26V67.05z'
          />
          <circle
            className='cls-3'
            fill='none'
            stroke='#212121'
            stroke-width='3'
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
        <div className='prev-screen prev-screen_tablet swiper'>
          <div className='swiper-wrapper'>
            <div className='swiper-slide'>
              <a href='#' target='_blank'>
                {/* <img
                      src='@img/Galactigun/TABLET-Galactigun.jpg'
                      alt='Galactigun'
                    /> */}
              </a>
            </div>
            <div className='swiper-slide'>
              <a href='#' target='_blank'>
                {/* <img
                      src='@img/Zapovednik/TABLET-zapovednik.jpg'
                      alt='zapovednik'
                    /> */}
              </a>
            </div>
            <div className='swiper-slide'>
              <a href='#' target='_blank'>
                {/* <img
                      src='@img/GoCorona/TABLET-GoCorona.jpg'
                      alt='GoCorona'
                    /> */}
              </a>
            </div>
            <div className='swiper-slide'>
              <a href='#' target='_blank'>
                {/* <img src='@img/SpaceX/TABLET-SpaceX.jpg' alt='SpaceX' /> */}
              </a>
            </div>
            <div className='swiper-slide'>
              <a href='#' target='_blank'>
                {/* <img src='@img/UberEats/TABLET-uber.jpg' alt='uber' /> */}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={css['phone']}>
        <svg
          className={css['screen']}
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 331.38 655.56'>
          <path
            className='cls-1'
            fill='#d0d0d0'
            fill-rule='evenodd'
            stroke='#212121'
            stroke-width='3'
            d='M35.51 1.5h260.37a34 34 0 0 1 34 34v584.56a34 34 0 0 1-34 34H35.51a34 34 0 0 1-34-34V35.5a34 34 0 0 1 34-34z'
          />
          <path
            className='cls-2'
            fill='#212121'
            fill-rule='evenodd'
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
            stroke-width='3'
            d='M165.16 596.01a21.257 21.257 0 0 1 0 42.5c-11.44 0-20.72-9.52-20.72-21.25a20.99 20.99 0 0 1 20.72-21.25z'
          />
        </svg>
        <div className='prev-screen prev-screen_phone swiper'>
          <div className='swiper-wrapper'>
            <div className='swiper-slide'>
              <a href='#' target='_blank'>
                {/* <img
                      src='@img/Galactigun/MOBILE-Galactigun.jpg'
                      alt='Galactigun'
                    /> */}
              </a>
            </div>
            <div className='swiper-slide'>
              <a href='#' target='_blank'>
                {/* <img
                      src='@img/Zapovednik/MOBILE-zapovednik.jpg'
                      alt='zapovednik'
                    /> */}
              </a>
            </div>
            <div className='swiper-slide'>
              <a href='#' target='_blank'>
                {/* <img
                      src='@img/GoCorona/MOBILE-GoCorona.jpg'
                      alt='GoCorona'
                    /> */}
              </a>
            </div>
            <div className='swiper-slide'>
              <a href='#' target='_blank'>
                {/* <img src='@img/SpaceX/MOBILE-SpaceX.jpg' alt='SpaceX' /> */}
              </a>
            </div>
            <div className='swiper-slide'>
              <a href='#' target='_blank'>
                {/* <img src='@img/UberEats/MOBILE-uber.jpg' alt='uber' /> */}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PreviewScreen
