import {useForm} from 'react-hook-form';

import css from './style.module.scss';

import {useModalFormState} from '@SpaceX/store';
import {errorsType, regExp} from 'utils/validate';

import ComForm from 'comComponents/ComForm';
import FieldSpaceX from '@SpaceX/UI/FieldSpaceX';
import ModalSpaceX from '@SpaceX/UI/ModalSpaceX';
import BtnSpaceX from '@SpaceX/UI/BtnSpaceX';

const ModalForm = () => {
  const {open: isOpen, setOpen, send, setSend} = useModalFormState();
  const {
    register,
    handleSubmit,
    formState: {isSubmitted, errors},
    reset,
  } = useForm();

  const submitAction = (data) => {
    const greetingData = {...data};
    alert(JSON.stringify(greetingData));
    setOpen(false);
    reset();
    setSend(true);
  };

  return (
    <ModalSpaceX
      title="Оставь свои контакты"
      btns={
        <BtnSpaceX red onClick={handleSubmit(submitAction)}>
          Отправить
        </BtnSpaceX>
      }
      isOpen={isOpen}
      setOpen={setOpen}
    >
      <ComForm className={css['form']} onSubmit={handleSubmit(submitAction)}>
        <FieldSpaceX
          {...register('userName', {
            ...errorsType.required,
            ...errorsType.minLength(2),
          })}
          error={{...errors.userName, isSubmitted}}
          className={css['input']}
          placeholder="Имя"
        />
        <FieldSpaceX
          {...register('userEmailOrPhone', {
            ...errorsType.required,
            validate: (value) =>
              regExp.email.test(value) ||
              regExp.phone.test(value) ||
              errorsType.validate.message,
          })}
          error={{
            ...errors.userEmailOrPhone,
            isSubmitted,
          }}
          className={css['input']}
          placeholder="Телефон или почта"
        />
        <FieldSpaceX
          {...register('userMessage', {
            ...errorsType.required,
            ...errorsType.minLength(5),
          })}
          error={{
            ...errors.userMessage,
            isSubmitted,
          }}
          fieldType="textarea"
          rows="6"
          className={css['text-area']}
          placeholder="Напиши своё послание..."
        />
      </ComForm>
    </ModalSpaceX>
  );
};

export default ModalForm;
