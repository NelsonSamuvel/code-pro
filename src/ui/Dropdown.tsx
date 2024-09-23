import { RegisterOptions } from "react-hook-form";
import { HiViewGrid, HiViewList } from "react-icons/hi";

export interface OptionType {
  label: string;
  value: string;
}

interface DropDownType {
  options: OptionType[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  name: string;
  isHide?: boolean;
  value: string | number;
  updateSortTip?: (val: string) => void;
}

export default function Dropdown({
  options,
  name,
  value,
  isHide = false,
  onChange,
}: DropDownType) {
  const hide = isHide ? "hidden" : "";

  return (
    <>
      <select
        value={value}
        onChange={onChange}
        name={name}
        className={`input ${hide} sm:block text-sm font-semibold font-montserrat py-2.5`}
      >
        {options?.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </>
  );
}
