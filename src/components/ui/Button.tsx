import { cva } from "class-variance-authority";
import { cn } from "../../utils/cn";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  disabled?: boolean;
}

const btnVariants = cva(
  "px-4 py-2.5 rounded-md font-semibold text-lg text-center",
  {
    variants: {
      variant: {
        primary: "bg-stone-900  text-white hover:bg-stone-800",
        secondary: "border-2 font-semibold hover:bg-stone-100",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

const Button = ({
  children,
  variant,
  disabled = false,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      {...props}
      className={cn(btnVariants({ variant }), className)}
    >
      {children}
    </button>
  );
};

export default Button;
