import ModalForm from '../../components/ModalForm';
import {useModalFormState} from '../../../store';
import BtnSpaceX from '../../../common/components/UI/BtnSpaceX';
import css from './style.module.scss';

const ProposalSpaceX = () => {
  const {open: isOpen, setOpen} = useModalFormState();

  return (
    <section className={css['proposal']}>
      <p className={css['text']}>
        <span>Путeшествие</span>
        <br />
        на красную планету
      </p>

      <BtnSpaceX className={css['btn']} glare onClick={setOpen}>
        Начать путешествие
        <span></span>
      </BtnSpaceX>

      <ModalForm />
    </section>
  );
};

export default ProposalSpaceX;
