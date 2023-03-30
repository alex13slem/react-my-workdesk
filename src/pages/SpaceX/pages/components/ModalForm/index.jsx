import {useMemo} from 'react';
import {useForm} from 'react-hook-form';
import ComForm from '../../../../../common/components/ComForm';
import BtnSpaceX from '../../../common/components/UI/BtnSpaceX';
import InputSpaceX from '../../../common/components/UI/InputSpaceX';
import ModalSpaceX from '../../../common/components/UI/ModalSpaceX';
import TextAreaSpaceX from '../../../common/components/UI/TextAreaSpaceX';
import {useModalFormState} from '../../../store';
import css from './style.module.scss';

const ModalForm = () => {
  const {open: isOpen, setOpen} = useModalFormState();
  const {
    register,
    handleSubmit,
    watch,
    formState: {errors},
  } = useForm();

  const regexps = {
    email:
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    phone: /^(\+)?((\d{2,3}) ?\d|\d)(([ -]?\d)|( ?(\d{2,3}) ?)){5,12}\d$/,
  };
  const {email: regEmail, phone: regPhone} = regexps;

  const errorsText = {
    required: 'Поле обязательно к заполнению',
    minLenght: (value) => `Минимальное количество символов: ${value}`,
    validate: 'Некорректно введены данные',
  };

  const submitAction = (data) => {
    const greetingData = {привет_друг: 'рад тебя тут видеть', ...data};
    alert(JSON.stringify(greetingData));
    setOpen(false);
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
        <InputSpaceX
          className={css['input']}
          aria-invalid={errors?.userName ? 'true' : 'false'}
          {...register('userName', {
            required: true,
            minLength: 2,
          })}
          placeholder="Имя"
          error={
            errors?.userName?.type === 'required'
              ? errorsText.required
              : errors?.userName?.type === 'minLength'
              ? errorsText.minLenght(2)
              : null
          }
        />
        <InputSpaceX
          className={css['input']}
          aria-invalid={errors?.userEmailOrPhone ? 'true' : 'false'}
          {...register('userEmailOrPhone', {
            required: true,
            validate: (value) => regEmail.test(value) || regPhone.test(value),
          })}
          placeholder="Телефон или почта"
          error={
            errors?.userEmailOrPhone?.type === 'required'
              ? errorsText.required
              : errors?.userEmailOrPhone?.type === 'validate'
              ? errorsText.validate
              : null
          }
        />
        <TextAreaSpaceX
          rows="6"
          className={css['text-area']}
          placeholder="Напиши своё послание..."
        />
      </ComForm>
    </ModalSpaceX>
  );
};

export default ModalForm;
