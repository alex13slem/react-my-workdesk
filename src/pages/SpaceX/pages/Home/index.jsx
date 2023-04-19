import css from './style.module.scss';

import {useDocumentTitle} from 'hooks';

import cardsJSON from '@SpaceX/data/cardsBlock.json';

import CardsBlockSpaceX from '@SpaceX/components/CardsBlock';

import ProposalSpaceX from './components/Proposal';
import styled from 'styled-components';

const Main = styled.main`
  margin-top: 12vh;
`;

const Home = () => {
  useDocumentTitle('SpaceX');

  return (
    <main className={css['main']}>
      <div className={css['wrap']}>
        <ProposalSpaceX />

        <CardsBlockSpaceX
          className={css['cards-block']}
          data={[...cardsJSON]}
        />
      </div>
    </main>
  );
};

export default Home;
