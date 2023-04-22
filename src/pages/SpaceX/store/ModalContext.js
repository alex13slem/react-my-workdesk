import {createContext} from 'react';

export const ModalContext = createContext({
  modalOpen: false,
  modalOpenHandler: () => {},
  modalSend: false,
  modalSendHandler: () => {},
});
