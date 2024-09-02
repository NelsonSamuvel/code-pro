import { useSearchParams } from "react-router-dom";
import { capitalize } from "../helpers/utils";
import { OptionType } from "./Dropdown";

type OptionsType = {
  options: OptionType[];
};

function Filter({ options }: OptionsType) {
  const [searchParams, setSearchParams] = useSearchParams();

  const catVal =
    searchParams.get("category") || searchParams.set("category", "all");

  function handleClick(value: string): void {
    searchParams.set("category", value);
    setSearchParams(searchParams);
  }

  const curCategoryStyle = `border-b-2 pb-1  border-stone-700 transition-all duration-200`;

  return (
    <>
      {options.map((option) => (
        <div className={`${option.value == catVal && curCategoryStyle} ${""}`}>
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
