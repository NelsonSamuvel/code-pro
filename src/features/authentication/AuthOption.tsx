import { Link } from "react-router-dom";
import { useAuthLayout } from "../../context/AuthLayoutProvider";

export default function AuthOption() {
  const { isLoginPage } = useAuthLayout();

  return (
    <div className="text-blue-600 text-center border py-8">
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
