import {useSwiper} from '/node_modules/swiper/react/swiper-react.js';

export const SwiperButtonNext = ({children, className, ...props}) => {
  const swiper = useSwiper();
  return (
    <button className={className} onClick={() => swiper.slideNext()} {...props}>
      {children}
    </button>
  );
};
export const SwiperButtonPrev = ({children, className, ...props}) => {
  const swiper = useSwiper();
  return (
    <button className={className} onClick={() => swiper.slidePrev()} {...props}>
      {children}
    </button>
  );
};
