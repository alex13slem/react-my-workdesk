import styled from 'styled-components';
import Button from './components/Button';
import {proposalText} from './mainCss';
import Title from './components/Title';
import {useContext} from 'react';
import {ModalContext} from '@SpaceX/store';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 1199px) {
    align-items: center;
    gap: 8vh;
  }
`;

const Message = styled.h2`
  ${proposalText}
`;

const Proposal = ({className}) => {
  const {modalSend: send, modalOpenHandler: setOpen} = useContext(ModalContext);

  return (
    <Section className={className}>
      <Title />

      {!send ? (
        <Button onClick={setOpen} />
      ) : (
        <Message>До встречи на орбите!</Message>
      )}
    </Section>
  );
};

export default Proposal;
