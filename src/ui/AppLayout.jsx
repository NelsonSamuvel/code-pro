import { Outlet } from "react-router-dom";
import PageLayout from "./PageLayout";
import Header from "./Header";
import Sidebar from "./Sidebar";

function AppLayout() {
  return (
    <PageLayout>
      <Sidebar />
      <Header />
      <Outlet />
    </PageLayout>
  );
}

export default AppLayout;
