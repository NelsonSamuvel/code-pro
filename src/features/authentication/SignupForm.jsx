import FormLayout from "../../ui/FormLayout";
import FormRow from "../../ui/FormRow";
import Button from "../../ui/Button";
import { useForm } from "react-hook-form";
import { useSignup } from "./useSignup";

export default function SignupForm() {
  const { signUp, isSigning } = useSignup();

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
    reset,
  } = useForm();

  function onSubmit({ email, password, fullName }) {
    signUp(
      { email, password, fullName },
      {
        onSettled: () => {
          reset();
        },
      }
    );
  }

  return (
    <FormLayout
      title="Create Your
Code pro Account 🚀"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormRow label="Full Name" error={errors?.fullName?.message}>
          <input
            className="input"
            id="fullName"
            type="text"
            {...register("fullName", {
              required: "This Field is required",
            })}
          />
        </FormRow>
        <FormRow label="Email" error={errors?.email?.message}>
          <input
            className="input"
            id="email"
            type="text"
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
          <input
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
          <input
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
