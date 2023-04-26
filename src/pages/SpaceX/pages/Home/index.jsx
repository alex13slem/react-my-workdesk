import {useDocumentTitle} from 'hooks';

import cardsJSON from '@SpaceX/data/cardsBlock.json';

import CardsBlock from '@SpaceX/components/CardsBlock';

import Proposal from './sections/Proposal';
import styled from 'styled-components';
import {LayoutWrap} from '@SpaceX/components/Layout';
import ModalForm from '@SpaceX/components/ModalForm';
import {ModalContext} from '@SpaceX/store';
import {useState} from 'react';
import {useDocumentFavicon} from 'hooks/useDocumentFavicon';

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

const Home = ({className}) => {
  useDocumentTitle('alex13slem | SpaceX');
  useDocumentFavicon({
    ico: 'favicon/space-x.ico',
  });
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
      <Main className={className}>
        <Wrap>
          <Proposal />

          <CardsBlock data={[...cardsJSON]} />
        </Wrap>
        <ModalForm />
      </Main>
    </ModalContext.Provider>
  );
};

export default Home;
