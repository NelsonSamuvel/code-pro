import { cva } from "class-variance-authority";
import { ForwardedRef, forwardRef, SelectHTMLAttributes } from "react";

export interface OptionType {
  label: string;
  value: string;
}

interface DropDownTypes extends SelectHTMLAttributes<HTMLSelectElement> {
  options: OptionType[];
  isHide?: boolean;
}

const DropDown = forwardRef(
  (
    { options, isHide = false, ...props }: DropDownTypes,
    ref: ForwardedRef<HTMLSelectElement>
  ) => {
    const hide = isHide ? "hidden" : "";

    return (
      <>
        <select
          ref={ref}
          {...props}
          className={`input ${hide} md:block text-sm font-bold font-montserrat py-2.5`}
        >
          {options?.map((option) => (
            <option
              key={option.value}
              value={option.value}
              className="font-semibold tracking-wide"
            >
              {option.label}
            </option>
          ))}
        </select>
      </>
    );
  }
);

export default DropDown;
