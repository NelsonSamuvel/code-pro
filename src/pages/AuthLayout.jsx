import { Link, Outlet, useLocation } from "react-router-dom";
import AuthLayoutProvider from "../context/AuthLayoutProvider";
import AuthOption from "../features/authentication/AuthOption";
import AuthHeader from "../ui/AuthHeader";

function AuthLayout() {
  return (
    <AuthLayoutProvider>
      <div className="grid grid-rows-[auto_1fr_auto] h-screen">
        <AuthHeader />
        <div className="flex items-center">
          <Outlet />
        </div>
        <AuthOption />
      </div>
    </AuthLayoutProvider>
  );
}

export default AuthLayout;
