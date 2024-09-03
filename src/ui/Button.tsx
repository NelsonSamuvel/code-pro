interface btnType {
  children: string;
  disabled: boolean;
  type?: string;
  onClick: () => void;
}

function Button({ children, disabled, onClick, type = "primary" }: btnType) {
  const btnStyles: any = {
    primary:
      "bg-stone-900 p-2 text-white rounded-sm text-lg hover:bg-stone-800",
    secondary:
      "border rounded-md py-1 px-3 text-[15px] font-semibold  text-stone-600 hover:bg-stone-100",
  };

  return (
    <button disabled={disabled} className={btnStyles[type]} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
