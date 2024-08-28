interface optionType {
  label: string;
  value: string;
}

interface DropDownType {
  options: optionType[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  name: string;
  value: string;
}

export default function Dropdown({
  options,
  name,
  value,
  onChange,
}: DropDownType) {
  return (
    <select
      value={value}
      onChange={onChange}
      name={name}
      className="input hidden sm:block text-sm font-semibold py-2.5"
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
