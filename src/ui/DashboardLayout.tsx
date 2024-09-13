import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

// grid-cols-[120px_1fr]  sm:grid-cols-[250px_1fr]

const DashboardLayout = () => {
  return (
    <div className="grid grid-cols-[90px_1fr]  md:grid-cols-[250px_1fr] grid-rows-[auto_1fr]">
      <Header />
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default DashboardLayout;
