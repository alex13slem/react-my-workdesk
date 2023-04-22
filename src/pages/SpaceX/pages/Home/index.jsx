import {useDocumentTitle} from 'hooks';

import cardsJSON from '@SpaceX/data/cardsBlock.json';

import CardsBlockSpaceX from '@SpaceX/components/CardsBlock';

import ProposalSpaceX from './sections/Proposal';
import styled from 'styled-components';
import {LayoutWrap} from '@SpaceX/components/Layout';
import ModalForm from '@SpaceX/components/ModalForm';
import {ModalContext} from '@SpaceX/store';
import {useState} from 'react';

const Main = styled.main`
  margin-top: 12vh;
`;

const Wrap = styled(LayoutWrap)`
  display: flex;
  justify-content: space-between;
  @media (max-width: 1199px) {
    display: block;
  }
`;

const Home = () => {
  useDocumentTitle('SpaceX');
  const [modalOpen, setModalOpen] = useState(false);
  const [modalSend, setModalSend] = useState(false);

  const modalOpenHandler = () => {
    setModalOpen(!modalOpen);
  };
  const modalSendHandler = () => {
    setModalSend(!modalSend);
  };

  return (
    <ModalContext.Provider
      value={{modalOpen, modalOpenHandler, modalSend, modalSendHandler}}
    >
      <Main>
        <Wrap>
          <ProposalSpaceX />

          <CardsBlockSpaceX data={[...cardsJSON]} />
        </Wrap>
        <ModalForm />
      </Main>
    </ModalContext.Provider>
  );
};

export default Home;
