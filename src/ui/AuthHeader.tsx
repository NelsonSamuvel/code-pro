import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";
import Button from "../components/ui/Button";

function AuthHeader() {
  const location = useLocation();

  const isLoginPage = location.pathname === "/login";

  return (
    <header className="flex items-center justify-between p-4">
      <Logo />
      <div className="space-x-4">
        <Link to="/contact">
          <button className="nav-btn  font-montserrat">Contact</button>
        </Link>
        <Link to={`/${isLoginPage ? "signup" : "login"}`}>
          <Button variant="secondary" className="font-montserrat text-base">
            {isLoginPage ? "Sign Up" : "Login"}
          </Button>
        </Link>
      </div>
    </header>
  );
}

export default AuthHeader;
