import {useDocumentTitle} from '../../../../hooks';
import css from './style.module.scss';
import cardsData from '../../data/cardsBlock.json';
import ProposalSpaceX from './components/Proposal';
import CardsBlockSpaceX from '../components/CardsBlock';

const Home = () => {
  useDocumentTitle('SpaceX');
  return (
    <main className={css['main']}>
      <div className={css['wrap']}>
        <ProposalSpaceX />

        <CardsBlockSpaceX className={css['cards-block']} data={cardsData} />
      </div>
    </main>
  );
};

export default Home;
