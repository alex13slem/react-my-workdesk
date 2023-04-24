import {createContext} from 'react';

export const SwiperContext = createContext({
  ctrldSwiperMain: {},
  setCtrldSwiperMain: () => {},
  ctrldSwiperSide: {},
  setCtrldSwiperSide: () => {},
});
