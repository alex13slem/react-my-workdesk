import css from './style.module.scss';

import {useDocumentTitle} from 'hooks';

import SectionGetStarted from '@GoCorona/sections/GetStarted';
import SectionStaySafe from '@GoCorona/sections/StaySafe';
import SectionExperts from '@GoCorona/sections/Experts';
import SectionHealthCare from '@GoCorona/sections/HealthCare';
import {useDocumentFavicon} from 'hooks/useDocumentFavicon';

const Home = () => {
  useDocumentTitle('alex13slem | GoCorona');
  useDocumentFavicon({
    ico: 'favicon/go-corona.png',
    svg: 'favicon/go-corona.svg',
  });
  return (
    <main className={css['main']}>
      <SectionGetStarted />
      <SectionStaySafe />
      <SectionExperts />
      <SectionHealthCare />
    </main>
  );
};
export default Home;
