import css from './style.module.scss';

import {useDocumentTitle} from 'hooks';

import SectionGetStarted from '@GoCorona/sections/GetStarted';
import SectionStaySafe from '@GoCorona/sections/StaySafe';
import SectionExperts from '@GoCorona/sections/Experts';
import SectionHealthCare from '@GoCorona/sections/HealthCare';

const Home = () => {
  useDocumentTitle('GoCorona');
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
