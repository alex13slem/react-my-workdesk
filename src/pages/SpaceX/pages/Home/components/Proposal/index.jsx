import ModalForm from '../../../components/ModalForm';
import {useModalFormState} from '../../../../store';
import BtnSpaceX from '../../../../common/components/UI/BtnSpaceX';
import css from './style.module.scss';

const ProposalSpaceX = () => {
  const {open: isOpen, setOpen} = useModalFormState();
  const {send} = useModalFormState();

  return (
    <section className={css['proposal']}>
      <h1 className={css['text']}>
        <b>ПУТЕШЕСТВИЕ</b>
        <br />
        на красную планету
      </h1>

      {!send ? (
        <BtnSpaceX className={css['btn']} glare onClick={setOpen}>
          Начать путешествие
          <span></span>
        </BtnSpaceX>
      ) : (
        <h2 className={css['message']}>До встречи на орбите!</h2>
      )}

      <ModalForm />
    </section>
  );
};

export default ProposalSpaceX;
