import { Link } from "react-router-dom";
import Logo from "./Logo";
import Button from "./Button";
import { useAuthLayout } from "../context/AuthLayoutProvider";

function Header() {
  const { isLoginPage } = useAuthLayout();

  return (
    <header className="flex items-center justify-between p-4">
      <Logo />
      <div className="space-x-4">
        <Link>
          <button className="text-stone-700 text-[15px]">Contact</button>
        </Link>
        <Link to={`/${isLoginPage ? "signup" : "login"}`}>
          <Button type="secondary">{isLoginPage ? "Sign Up" : "Login"}</Button>
        </Link>
      </div>
    </header>
  );
}

export default Header;
