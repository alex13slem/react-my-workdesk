import {useState} from 'react';
import {SwiperContext} from './context';
import styled from 'styled-components';

import './components/Swiper/swiper.scss';

import '/node_modules/swiper/swiper.scss';
import '/node_modules/swiper/modules/navigation/navigation.scss';
import '/node_modules/swiper/modules/effect-fade/effect-fade.scss';

import Desktop from './components/Desktop';
import Tablet from './components/Tablet';
import Phone from './components/Phone';

const Section = styled.section`
  position: relative;
  margin-left: 70px;
  width: calc(50vh + 20%);

  perspective: 150vh;

  @media (max-aspect-ratio: 16 / 11) {
    margin-bottom: 13%;
  }

  @media (orientation: portrait) {
    width: 100%;
    margin-inline: auto;
    justify-self: end;
  }
`;

const PreviewScreen = ({className}) => {
  const [ctrldSwiperMain, setCtrldSwiperMain] = useState({});
  const [ctrldSwiperSide, setCtrldSwiperSide] = useState(ctrldSwiperMain);

  return (
    <SwiperContext.Provider
      value={{
        ctrldSwiperMain,
        setCtrldSwiperMain,
        ctrldSwiperSide,
        setCtrldSwiperSide,
      }}
    >
      <Section className={className}>
        <Desktop />
        <Tablet className="tablet" />
        <Phone className="phone" />
      </Section>
    </SwiperContext.Provider>
  );
};

export default PreviewScreen;
