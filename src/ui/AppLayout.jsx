import { Outlet } from "react-router-dom";
import PageLayout from "./PageLayout";
import Header from "./Header";
import { useMenu } from "../context/MenuProvider";
import MenuPage from "../pages/MenuPage";

function AppLayout() {
  const { isMenuOpen } = useMenu();

  return (
    <PageLayout>
      <Header />
      <Outlet />
      {isMenuOpen && <MenuPage />}
    </PageLayout>
  );
}

export default AppLayout;
