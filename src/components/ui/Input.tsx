import { cva } from "class-variance-authority";
import { cn } from "../../utils/cn";

type InputProps = React.HTMLAttributes<HTMLInputElement> & {
  variant?: "primary";
  value: string;
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

const Input = ({ className, variant, ...props }: InputProps) => {
  return (
    <input {...props} className={cn(inputVariants({ variant }), className)} />
  );
};

export default Input;
