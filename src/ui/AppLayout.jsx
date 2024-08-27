import { Outlet } from "react-router-dom";
import PageLayout from "./PageLayout";
import Header from "./Header";

function AppLayout() {
  return (
    <PageLayout>
      <Outlet />
    </PageLayout>
  );
}

export default AppLayout;
