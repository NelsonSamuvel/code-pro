import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { useEffect } from "react";

// grid-cols-[120px_1fr]  sm:grid-cols-[250px_1fr]

const DashboardLayout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("userTips");
  }, []);

  return (
    <div className="grid grid-cols-[80px_1fr] sm:grid-cols-[90px_1fr]  md:grid-cols-[250px_1fr] grid-rows-[auto_1fr]">
      <Header />
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default DashboardLayout;
