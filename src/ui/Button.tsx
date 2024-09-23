import { ReactNode } from "react";

interface btnType {
  children: ReactNode;
  disabled?: boolean;
  type?: string;
  onClick?: () => void;
  id?: string;
}

function Button({
  children,
  disabled = false,
  onClick,
  id = "",
  type = "primary",
}: btnType) {
  const btnStyles: any = {
    primary:
      "bg-black-stone p-2 text-white rounded-sm text-lg hover:bg-stone-800 disabled:bg-stone-600",
    secondary:
      "border rounded-md py-1 px-3 font-semibold hover:bg-stone-100 font-montserrat",
  };

  return (
    <button
      disabled={disabled}
      id={id}
      className={btnStyles[type]}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
