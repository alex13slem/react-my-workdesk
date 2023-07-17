import {create} from 'zustand';

export const useProductsData = create((set) => ({
  products: [],
  limit: 15,
  skip: 0,
  isLoading: false,
  setProducts: (products) => set({products}),
  setLimit: (limit) => set({limit}),
  setSkip: (skip) => set({skip}),
  setIsLoading: (isLoading) => set({isLoading}),
}));
