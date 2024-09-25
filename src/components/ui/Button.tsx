import { cva } from "class-variance-authority";
import { cn } from "../../utils/cn";

type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

const btnVariants = cva("px-4 py-2.5 rounded-md font-semibold text-lg", {
  variants: {
    variant: {
      primary: "bg-stone-900  text-white hover:bg-stone-800",
      secondary: "border-2 font-semibold hover:bg-stone-100",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

const Button = ({ children, variant, className, ...props }: ButtonProps) => {
  return (
    <button {...props} className={cn(btnVariants({ variant }), className)}>
      {children}
    </button>
  );
};

export default Button;
