import {useDocumentTitle} from '../../../../hooks';
import SectionExperts from '../../sections/Experts';
import SectionGetStarted from '../../sections/GetStarted';
import SectionHealthCare from '../../sections/HealthCare';
import SectionStaySafe from '../../sections/StaySafe';
import css from './style.module.scss';

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
