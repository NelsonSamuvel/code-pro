function Button({ children, disabled }) {
  return (
    <button
      disabled={disabled}
      className="mt-6 bg-blue-500 p-2 text-white rounded-sm text-lg"
    >
      {children}
    </button>
  );
}

export default Button;
