import { cva } from "class-variance-authority";
import { cn } from "../../utils/cn";
import { ForwardedRef, forwardRef } from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  variant?: "primary";
};

const inputVariants = cva(
  "border border-slate-300 rounded-lg px-3 py-2 h-10 text-stone-700",
  {
    variants: {
      variant: {
        primary:
          "focus:outline-none focus:ring-1 focus:ring-stone-700 focus:ring-offset-1 focus:shadow-md",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

const Input = forwardRef(
  (
    { className, placeholder, variant, ...props }: InputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <input
        ref={ref}
        placeholder={placeholder}
        {...props}
        className={cn(inputVariants({ variant }), className)}
      />
    );
  }
);

export default Input;
