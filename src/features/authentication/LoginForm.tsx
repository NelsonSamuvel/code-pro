import { FormEvent, useState } from "react";
import Button from "../../ui/Button";
import FormRow from "../../ui/FormRow";

import { useLogin } from "./useLogin";
import FormLayout from "../../ui/FormLayout";

function LoginForm() {
  const [email, setEmail] = useState("test@gmail.com");
  const [password, setPassword] = useState("12344321");

  const { login, isLoggingIn } = useLogin();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
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
        <FormRow label="Email">
          <input
            className="input disabled-input"
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLoggingIn}
          />
        </FormRow>

        <FormRow label="Password">
          <input
            className="input disabled-input"
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
