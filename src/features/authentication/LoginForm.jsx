import { useState } from "react";
import Button from "../../ui/Button";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useLogin } from "./useLogin";
import { Link } from "react-router-dom";
import FormLayout from "../../ui/FormLayout";

function LoginForm() {
  const [email, setEmail] = useState("nelson@gmail.com");
  const [password, setPassword] = useState("qwerty");

  const { login, isLoggingIn } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;

    login(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      }
    );
  }

  return (
    <FormLayout title="Login Form">
      <form onSubmit={handleSubmit}>
        <FormRow>
          <label htmlFor="email" className="text-stone-900 md:text-lg">
            Email
          </label>
          <Input
            id="email"
            value={email}
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLoggingIn}
          />
        </FormRow>
        <FormRow>
          <label htmlFor="password" className="text-stone-900 md:text-lg">
            Password
          </label>
          <Input
            id="password"
            type="password"
            value={password}
            disabled={isLoggingIn}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormRow>
        <FormRow>
          <Button disabled={isLoggingIn}>Log in</Button>
        </FormRow>
      </form>
    </FormLayout>
  );
}

export default LoginForm;
