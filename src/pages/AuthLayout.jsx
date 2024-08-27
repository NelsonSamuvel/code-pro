import { Link, Outlet, useLocation } from "react-router-dom";
import Header from "../ui/Header";
import AuthLayoutProvider from "../context/AuthLayoutProvider";
import AuthOption from "../features/authentication/AuthOption";

function AuthLayout() {
  return (
    <AuthLayoutProvider>
      <div className="grid grid-rows-[auto_1fr_auto] h-screen">
        <Header />
        <div className="flex items-center">
          <Outlet />
        </div>
       <AuthOption/>
      </div>
    </AuthLayoutProvider>
  );
}

export default AuthLayout;
