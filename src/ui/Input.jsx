function Input({ id, value, onChange, disabled, type }) {
  return (
    <input
      type={type}
      id={id}
      value={value}
      onChange={onChange}
      disabled={disabled}
      className="border border-slate-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-1 focus:ring-blue-400
      text-slate-600
      "
    />
  );
}

export default Input;
