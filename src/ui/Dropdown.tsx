import { HiViewGrid, HiViewList } from "react-icons/hi";

export interface OptionType {
  label: string;
  value: string;
}

interface DropDownType {
  options: OptionType[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  name: string;
  value: string | number;
  isHide: boolean;
  type: string;
  updateSortTip: (val: string) => void;
}

export default function Dropdown({
  options,
  name,
  value,
  onChange,
  type = "sm",
  isHide = false,
  updateSortTip,
}: DropDownType) {
  const isHidden = isHide ? "hidden" : "";

  return (
    <>
      {type === "sm" ? (
        <select
          value={value}
          onChange={onChange}
          name={name}
          className={`input sm:block text-sm font-semibold py-2.5`}
        >
          {options?.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        <ul
          className={`${isHidden} sm:hidden fixed border-2 bottom-0 w-full bg-white px-6 py-2 left-0  space-y-2`}
        >
          {options?.map((option) => (
            <li key={option.value}>
              <button
                className="w-full rounded-md text-left p-2 hover:bg-stone-100"
                onClick={() => updateSortTip(option.value)}
              >
                {option.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
