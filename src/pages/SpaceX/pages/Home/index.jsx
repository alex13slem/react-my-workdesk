import {useDocumentTitle} from '../../../../hooks';
import css from './style.module.scss';
import cardsData from '../../data/cardsBlock.json';
import ProposalSpaceX from '../sections/Proposal';
import CardsBlockSpaceX from '../sections/CardsBlock';

const Home = () => {
  useDocumentTitle('SpaceX');
  return (
    <main className={css['main']}>
      <div className={css['wrap']}>
        <ProposalSpaceX />
        <CardsBlockSpaceX data={cardsData} />
      </div>
    </main>
  );
};

export default Home;
