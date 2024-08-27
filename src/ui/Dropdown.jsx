export default function Dropdown({ options, name }) {
  return (
    <select name={name} className="input hidden sm:block text-sm font-semibold py-2.5">
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
