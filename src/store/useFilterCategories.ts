import { create } from "zustand";

type FilterCategoriesType = {
  filterCategory: string;
  setFilterCategory: (value: string) => void;
};

export const useFilterCategories = create<FilterCategoriesType>((set) => ({
  filterCategory: "all",
  setFilterCategory: (filter: string) => set({ filterCategory: filter }),
}));
