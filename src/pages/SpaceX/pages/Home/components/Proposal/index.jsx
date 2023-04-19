import {useModalFormState} from '@SpaceX/store';

import ModalForm from '@SpaceX/components/ModalForm';

import styled from 'styled-components';
import Button from './components/Button';
import {proposalText} from './mainCss';
import Title from './components/Title';

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

const ProposalSpaceX = () => {
  const {open: isOpen, setOpen} = useModalFormState();
  const {send} = useModalFormState();

  return (
    <Section>
      <Title />

      {!send ? (
        <Button onClick={setOpen} />
      ) : (
        <Message>До встречи на орбите!</Message>
      )}

      <ModalForm />
    </Section>
  );
};

export default ProposalSpaceX;
