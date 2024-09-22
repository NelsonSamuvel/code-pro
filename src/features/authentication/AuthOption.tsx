import { Link, useLocation } from "react-router-dom";

export default function AuthOption() {
  const location = useLocation();

  const isLoginPage = location.pathname === "/login";

  return (
    <div className="text-violet text-center border py-8">
      <Link to={`/${isLoginPage ? "signup" : "login"}`}>
        <p className="hover:underline">
          {isLoginPage
            ? "Don't have an account? Sign Up"
            : "Already have an account? Log in"}
        </p>
      </Link>
    </div>
  );
}
