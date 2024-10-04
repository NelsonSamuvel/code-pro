import { Outlet } from "react-router-dom";
import AuthOption from "../features/authentication/AuthOption";
import AuthHeader from "./AuthHeader";

function AuthLayout() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] sm:h-screen">
      <AuthHeader />
      <div className="flex items-center">
        <Outlet />
      </div>
      <AuthOption />
    </div>
  );
}

export default AuthLayout;
