import {create} from 'zustand';

export const useHeaderValues = create((set) => ({
  top: 0,
  reverseTop: 0,
  height: null,
  margin: 32,
  setHeight: (height) => set({height}),
  setTop: (top) => set({top}),
  setReverseTop: (reverseTop) => set({reverseTop}),
}));
