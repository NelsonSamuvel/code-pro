function Input({ id, value, onChange, disabled, type }) {
  return (
    <input
      type={type}
      id={id}
      value={value}
      onChange={onChange}
      disabled={disabled}
      className="border border-slate-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-1 focus:ring-stone-700 focus:ring-offset-1 focus:shadow-md
      text-stone-700
      "
    />
  );
}

export default Input;
