function FormRow({ children, label, error = "" }) {
  return (
    <div className="flex flex-col mt-6 space-y-2">
      <label htmlFor={children.props.id} className="text-stone-900 md:text-lg">
        {label}
      </label>
      {children}
      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  );
}

export default FormRow;