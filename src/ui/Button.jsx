function Button({ children, disabled,type = "primary" }) {

  const btnStyles = {
    primary : "mt-6 bg-stone-900 p-2 text-white rounded-sm text-lg",
    secondary : "border rounded-md py-1 px-3 text-[15px] font-semibold  text-stone-600 hover:bg-stone-100"
  }

  return (
    <button
      disabled={disabled}
      className={btnStyles[type]}
    >
      {children}
    </button>
  );
}

export default Button;
