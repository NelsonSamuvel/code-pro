interface optionType {
  label: string;
  value: string;
}

interface DropDownType {
  options: optionType[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  name: string;
  value: string | number | undefined;
  isHide: boolean;
}

export default function Dropdown({
  options,
  name,
  value,
  onChange,
  isHide = false,
}: DropDownType) {
  const isHidden = isHide ? "hidden" : "";

  return (
    <select
      value={value}
      onChange={onChange}
      name={name}
      className={`input ${isHidden} sm:block text-sm font-semibold py-2.5`}
    >
      {options?.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
