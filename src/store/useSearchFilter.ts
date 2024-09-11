import { create } from "zustand";

type SearchFilterType = {
  searchTip: string;
  sortTip: string;
  view: string;
  updateSearchTip: (value: string) => void;
  updateSortTip: (value: string) => void;
  updateView: (value: string) => void;
};

export const useSearchFilter = create<SearchFilterType>((set) => ({
  searchTip: "",
  sortTip: "title-asc",
  view: "grid",
  updateSearchTip: (value) => {
    set({ searchTip: value });
  },
  updateSortTip: (value) => {
    set({ sortTip: value });
  },
  updateView: (value) => {
    set({ view: value });
  },
}));
