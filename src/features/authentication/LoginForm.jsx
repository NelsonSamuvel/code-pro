import { useState } from "react";
import Button from "../../ui/Button";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useLogin } from "./useLogin";

function LoginForm() {
  const [email, setEmail] = useState("nelson@gmail.com");
  const [password, setPassword] = useState("qwerty");

  const { login, isLoggingIn } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;

    login({ email, password },{
      onSettled : ()=>{
        setEmail("");
        setPassword("")
      }
    });
  }

  return (
    <div className="w-2/3 md:w-[450px] mx-auto h-dvh mt-24 px-2 py-4">
      <img src="" alt="" />
      <h1 className="text-xl md:text-2xl font-semibold text-slate-600">
        Login Form
      </h1>
      <form onSubmit={handleSubmit}>
        <FormRow>
          <label htmlFor="email" className="text-slate-500 md:text-lg">
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
          <label htmlFor="password" className="text-slate-500 md:text-lg">
            Password
          </label>
          <Input
            id="password"
            type ="password"
            value={password}
            disabled={isLoggingIn}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormRow>
        <FormRow>
          <Button disabled={isLoggingIn}>Log in</Button>
        </FormRow>
      </form>
    </div>
  );
}

export default LoginForm;
