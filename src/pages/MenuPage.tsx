import { useLogout } from "../features/authentication/useLogout";
import { useOutsideClick } from "../hooks/useOutsideClick";
import { useNavigate } from "react-router-dom";
import SideMenu from "../components/menus/SideMenu";
import ProfileMenu from "../components/menus/ProfileMenu";

type PropsType = {
  handleMenu: () => void;
};

const MenuPage = ({ handleMenu }: PropsType) => {
  const navigate = useNavigate();

  const { logout, isLoggingOut } = useLogout();

  const ref = useOutsideClick(handleMenu);

  function handleNavigateBtn(path: string) {
    handleMenu();
    navigate(path);
  }

  function handleLogout() {
    logout();
  }

  return (
    <div
      ref={ref}
      className="font-montserrat font-medium flex flex-col gap-2 items-start  fixed left-0 right-0 top-16 bottom-0  border-b-2 shadow-sm sm:left-auto sm:bottom-auto sm:right-4 sm:mt-4 bg-white sm:border sm:rounded-md p-4 z-10"
    >
      <SideMenu onNavigate={handleNavigateBtn} />
      <ProfileMenu
        onNavigate={handleNavigateBtn}
        onLogout={handleLogout}
        isLoggingOut={isLoggingOut}
      />
    </div>
  );
};

export default MenuPage;
