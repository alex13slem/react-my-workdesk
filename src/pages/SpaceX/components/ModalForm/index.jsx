import {useForm} from 'react-hook-form';
import styled from 'styled-components';

import {errorsType, regExp} from 'utils/validate';

import ComForm from 'comComponents/ComForm';
import ModalSpaceX from '@SpaceX/UI/ModalSpaceX';
import {useContext} from 'react';
import {ModalContext} from '@SpaceX/store';
import {FieldGroup, Input, Textarea} from '@SpaceX/UI/Fields';
import {AlertBtn, BtnSpaceX} from '@SpaceX/UI/Buttons';

const Form = styled(ComForm)`
  display: grid;
  gap: 10px;

  justify-content: center;

  grid-template-columns: repeat(2, 230px);

  @media (orientation: portrait) {
    grid-template-columns: 230px;
  }
`;

const InputGroup = styled(FieldGroup)`
  grid-column: span 1;
`;

const TextareaGroup = styled(FieldGroup)`
  grid-column: span 2;

  @media (orientation: portrait) {
    grid-column: span 1;
  }
`;

const ModalForm = () => {
  const {
    modalOpen: isOpen,
    modalOpenHandler: setOpen,
    modalSendHandler: setSend,
  } = useContext(ModalContext);

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
      <Form onSubmit={handleSubmit(submitAction)}>
        <InputGroup
          isValid={isSubmitted ? (errors.userName ? 'invalid' : 'valid') : null}
        >
          <Input
            {...register('userName', {
              ...errorsType.required,
              ...errorsType.minLength(2),
            })}
            placeholder="Имя"
          />
          {isSubmitted && <AlertBtn message={errors.userName?.message} />}
        </InputGroup>
        <InputGroup
          isValid={
            isSubmitted ? (errors.userEmailOrPhone ? 'invalid' : 'valid') : null
          }
        >
          <Input
            {...register('userEmailOrPhone', {
              ...errorsType.required,
              validate: (value) =>
                regExp.email.test(value) ||
                regExp.phone.test(value) ||
                errorsType.validate.message,
            })}
            placeholder="Телефон или почта"
          />
          {isSubmitted && (
            <AlertBtn message={errors.userEmailOrPhone?.message} />
          )}
        </InputGroup>
        <TextareaGroup
          isValid={
            isSubmitted ? (errors.userMessage ? 'invalid' : 'valid') : null
          }
        >
          <Textarea
            {...register('userMessage', {
              ...errorsType.required,
              ...errorsType.minLength(5),
            })}
            rows="6"
            placeholder="Напиши своё послание..."
          />
          {isSubmitted && <AlertBtn message={errors.userMessage?.message} />}
        </TextareaGroup>
      </Form>
    </ModalSpaceX>
  );
};

export default ModalForm;
