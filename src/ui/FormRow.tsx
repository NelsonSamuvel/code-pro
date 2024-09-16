import { ReactElement, ReactNode } from "react";

interface FormRowType {
  children: ReactElement;
  label?: string;
  error?: string | undefined;
  icon?: ReactNode;
  handleIcon?: () => void;
}

function FormRow({ children, label, error, icon, handleIcon }: FormRowType) {
  return (
    <div className="flex flex-col mt-5 space-y-2 relative">
      <label htmlFor={children.props.id} className="text-stone-900 md:text-lg">
        {label}
      </label>
      {children}
      <div
        className="absolute right-3 top-[50%] cursor-pointer"
        onClick={handleIcon}
      >
        {icon}
      </div>
      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  );
}

export default FormRow;
