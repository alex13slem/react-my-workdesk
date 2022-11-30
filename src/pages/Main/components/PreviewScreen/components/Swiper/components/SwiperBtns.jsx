import { useState } from 'react'
import {
  useSwiper,
  useSwiperSlide
} from '/node_modules/swiper/react/swiper-react.js'

export const SwiperButtonNext = ({ children, style, className }) => {
  const swiper = useSwiper()
  return (
    <button
      className={className}
      style={style}
      onClick={() => swiper.slideNext()}>
      {children}
    </button>
  )
}
export const SwiperButtonPrev = ({ children, style, className }) => {
  const swiper = useSwiper()
  return (
    <button
      className={className}
      style={style}
      onClick={() => swiper.slidePrev()}>
      {children}
    </button>
  )
}

export const SwiperButtonGo = ({ children, style, className }) => {
  const swiperSlide = useSwiperSlide()
  const btnOpacity = () =>
    swiperSlide.isActive ? { opacity: '1', transition: 'opacity .3s ease' } : {}
  return (
    <button className={className} style={{ ...style, ...btnOpacity() }}>
      {children}
    </button>
  )
}
