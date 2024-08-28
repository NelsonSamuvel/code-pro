import { createContext, useContext, useState } from "react";

//types
import { ChildrenType } from "../types/children.type";

interface SearchContextType {
  searchTip: string;
  updateSearchTip: (value: string) => void;
  sortTip: string;
  updateSortTip: (value: string) => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export default function SearchProvider({ children }: ChildrenType) {
  const [searchTip, setSearchTip] = useState<string>("");
  const [sortTip, setSortTip] = useState<string>("title-asc");

  function updateSearchTip(value: string) {
    setSearchTip(value);
  }

  function updateSortTip(value: string) {
    setSortTip(value);
  }


  return (
    <SearchContext.Provider
      value={{ searchTip, updateSearchTip, sortTip, updateSortTip }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  const context = useContext(SearchContext);
  if (context === undefined)
    throw new Error("value is used outside of SearchContext");
  return context;
}
