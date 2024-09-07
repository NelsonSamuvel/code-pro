import { ReactNode } from "react";

interface btnType {
  children: ReactNode;
  disabled: boolean;
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
  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    onClick?.();
  }

  const btnStyles: any = {
    primary:
      "bg-stone-900 p-2 text-white rounded-sm text-lg hover:bg-stone-800",
    secondary:
      "border rounded-md py-1 px-3 text-[15px] font-semibold  text-stone-600 hover:bg-stone-100",
  };

  return (
    <button
      disabled={disabled}
      id={id}
      className={btnStyles[type]}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

export default Button;
