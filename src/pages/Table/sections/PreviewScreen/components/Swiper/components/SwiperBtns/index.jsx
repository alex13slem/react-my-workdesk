import { Link } from 'react-router-dom'
import { useSwiperSlide } from '/node_modules/swiper/react/swiper-react.js'

export const SwiperButtonGo = ({ children, style, className, navLink }) => {
  const swiperSlide = useSwiperSlide()
  const btnOpacity = () =>
    swiperSlide.isActive ? { opacity: '1', transition: 'opacity .3s ease' } : {}
  return (
    <Link
      to={navLink}
      className={className}
      style={{ ...style, ...btnOpacity(), ...{ cursor: 'pointer' } }}>
      {children}
    </Link>
  )
}
