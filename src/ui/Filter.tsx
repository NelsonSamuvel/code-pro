import { useSearchParams } from "react-router-dom";
import { capitalize } from "../helpers/utils";
import { OptionType } from "./Dropdown";
import { useEffect } from "react";
import { useFilterCategories } from "../store/useFilterCategories";

type OptionsType = {
  options: OptionType[];
};

function Filter({ options }: OptionsType) {
  const { filterCategory, setFilterCategory } = useFilterCategories();


  function handleClick(value: string): void {
    setFilterCategory(value);
  }

  const curCategoryStyle = `border-b-2 pb-1  border-stone-700 transition-all duration-200`;

  return (
    <>
      {options.map((option) => (
        <div
          key={option.value}
          className={`${option.value == filterCategory && curCategoryStyle} ${""}`}
        >
          <button
            className="hover:bg-stone-200 px-2 py-1 rounded-sm"
            key={option.value}
            onClick={() => handleClick(option.value as string)}
          >
            {capitalize(option.label)}
          </button>
        </div>
      ))}
    </>
  );
}

export default Filter;
