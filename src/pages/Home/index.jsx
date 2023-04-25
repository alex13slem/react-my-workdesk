import {useDocumentTitle} from 'hooks';

import Contacts from './components/Contacts';
import Greeting from './components/Greeting';
import PreviewScreen from './components/PreviewScreen';
import styled from 'styled-components';
import {Boards, FlowerFrame} from './UI/bg';

const Main = styled.main`
  position: relative;
  height: 100vh;
  overflow: hidden;
  padding: 80px 40px;

  background: #faebd7;

  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 767.98px) {
    padding: 20px;
  }
  @media (orientation: portrait) {
    display: flex;
    flex-direction: column;
    gap: 5%;
    .sect-contacts {
      flex: 1 1 auto;
    }
  }

  .bg {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: 20%;
  }

  .flower-frame {
    z-index: 1;
    position: absolute;

    top: 22%;
    right: 32%;

    @media (max-width: 1023.98px) {
      right: auto;
      left: 20%;
    }
    @media (max-width: 767.98px) {
      top: auto;
      bottom: 45%;
    }
    @media (max-height: 767.98px) {
      display: none;
    }
  }

  .sect-greeting,
  .sect-contacts,
  .sect-screen {
    z-index: 2;
    position: relative;
  }

  .sect-screen {
    align-self: end;
  }
`;

const Home = ({className}) => {
  useDocumentTitle('alex13slem | Welcome!');
  return (
    <Main className={className}>
      <Greeting className="sect-greeting">ПРОШУ ЛЮБИТЬ И ЖАЛОВАТЬ!</Greeting>
      <Contacts className="sect-contacts" />
      <PreviewScreen className="sect-screen" />

      <Boards className="bg" />

      <FlowerFrame className="flower-frame" />
    </Main>
  );
};

export default Home;
