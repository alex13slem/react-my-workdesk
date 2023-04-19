import {useSwiper} from '/node_modules/swiper/react/swiper-react.js';

export const SwiperButtonNext = ({children, style, className}) => {
  const swiper = useSwiper();
  return (
    <button
      className={className}
      style={style}
      onClick={() => swiper.slideNext()}
    >
      {children}
    </button>
  );
};
export const SwiperButtonPrev = ({children, style, className}) => {
  const swiper = useSwiper();
  return (
    <button
      className={className}
      style={style}
      onClick={() => swiper.slidePrev()}
    >
      {children}
    </button>
  );
};
