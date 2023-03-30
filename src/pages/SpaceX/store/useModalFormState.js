import {create} from 'zustand';

export const useModalFormState = create((set) => ({
  open: false,
  setOpen: (bool) => set({open: Boolean(bool)}),
}));
