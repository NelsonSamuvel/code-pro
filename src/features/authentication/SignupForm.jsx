import Input from "../../ui/Input";
import FormLayout from "../../ui/FormLayout";
import FormRow from "../../ui/FormRow";
import Button from "../../ui/Button";

export default function SignupForm() {
  return (
    <FormLayout
      title="Create Your
Vercel Account"
    >
      <form>
        <FormRow>
          <label htmlFor="fullName" className="text-stone-900 md:text-lg">
            Full Name
          </label>
          <Input id="fullName" type="text" />
        </FormRow>
        <FormRow>
          <label htmlFor="email" className="text-stone-900 md:text-lg">
            Email
          </label>
          <Input id="email" type="text" />
        </FormRow>
        <FormRow>
          <label htmlFor="password" className="text-stone-900 md:text-lg">
            Password
          </label>
          <Input id="password" type="password" />
        </FormRow>
        <FormRow>
          <label
            htmlFor="confirmPassword"
            className="text-stone-900 md:text-lg"
          >
            Confirm Password
          </label>
          <Input id="confirmPassword" type="password" />
        </FormRow>
        <FormRow>
          <Button>Sign up</Button>
        </FormRow>
      </form>
    </FormLayout>
  );
}
