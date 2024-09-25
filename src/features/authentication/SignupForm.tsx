import FormLayout from "../../ui/FormLayout";
import FormRow from "../../ui/FormRow";
import Button from "../../ui/Button";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useSignup } from "./useSignup";
import Input from "../../components/ui/Input";

type FormData = {
  fullName: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export default function SignupForm() {
  const { signUp, isSigning } = useSignup();

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FieldValues> = ({
    email,
    password,
    fullName,
    username,
  }) => {
    signUp(
      { email, password, fullName, username },
      {
        onSettled: () => {
          reset();
        },
      }
    );
  };

  return (
    <FormLayout
      title="Create Your
Code pro Account 🚀"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormRow label="Full Name" error={errors?.fullName?.message}>
          <Input
            type="text"
            className="input"
            id="fullName"
            {...register("fullName", {
              required: "This Field is required",
            })}
          />
        </FormRow>
        <FormRow label="Username" error={errors?.username?.message}>
          <Input
            type="text"
            className="input"
            id="username"
            {...register("username", {
              required: "This Field is required",
            })}
          />
        </FormRow>
        <FormRow label="Email" error={errors?.email?.message}>
          <Input
            className="input"
            id="email"
            type="email"
            {...register("email", {
              required: "This Field is required",
              pattern: {
                value: /^[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                message: "Enter a valid Email Id",
              },
            })}
          />
        </FormRow>
        <FormRow label="Password" error={errors?.password?.message}>
          <Input
            className="input"
            id="password"
            type="password"
            disabled={isSigning}
            {...register("password", {
              required: "This Field is required",
              minLength: {
                value: 8,
                message: "Enter a password minimum length of 8 characters",
              },
            })}
          />
        </FormRow>
        <FormRow
          label="Confirm Password"
          error={errors?.confirmPassword?.message}
        >
          <Input
            id="confirmPassword"
            type="password"
            disabled={isSigning}
            className="input"
            {...register("confirmPassword", {
              validate: (value) =>
                value === getValues().password ||
                "Confirm Password should match your original password",
            })}
          />
        </FormRow>
        <FormRow>
          <Button disabled={isSigning}>Sign up</Button>
        </FormRow>
      </form>
    </FormLayout>
  );
}
