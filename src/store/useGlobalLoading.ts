import { create } from "zustand";

type LoadingType = {
  isGlobalLoading: boolean;
  setGlobalLoading: (loadingState: boolean) => void;
};

export const useGlobalLoading = create<LoadingType>((set) => ({
  isGlobalLoading: false,
  setGlobalLoading: (loadingState: boolean) =>
    set({ isGlobalLoading: loadingState }),
}));
