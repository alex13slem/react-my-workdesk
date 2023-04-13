import {create} from 'zustand';

export const useModalFormState = create((set) => ({
  open: false,
  send: false,
  setOpen: (bool) => set({open: Boolean(bool)}),
  setSend: (bool) => set({send: Boolean(bool)}),
}));
