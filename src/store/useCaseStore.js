// src/store/useCaseStore.js
import {create} from 'zustand';

export const useCaseStore = create((set) => ({
  selectedCase: null,
  setSelectedCase: (c) => set({ selectedCase: c }),
}));
