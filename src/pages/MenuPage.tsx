import { HiUser } from "react-icons/hi2";
import { useAuth } from "../features/authentication/useAuth";
import { useLogout } from "../features/authentication/useLogout";
import Spinner from "../ui/Spinner";
import { useOutsideClick } from "../hooks/useOutsideClick";
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import { useMenu } from "../context/MenuProvider";
import SideMenu from "../components/menus/SIdeMenu";
import ProfileMenu from "../components/menus/ProfileMenu";

type ActiveType = { isActive: boolean };

const MenuPage = () => {

  const navigate = useNavigate();

  const { logout, isLoggingOut } = useLogout();
  const { handleMenu } = useMenu();

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
      className=" flex flex-col gap-2 items-start  fixed left-0 right-0 top-16 bottom-0  border-b-2 shadow-sm sm:left-auto sm:bottom-auto sm:right-4 sm:mt-4 bg-white sm:border sm:rounded-md p-4"
    >
      <SideMenu onNavigate={handleNavigateBtn} />
      <ProfileMenu onNavigate={handleNavigateBtn} onLogout={handleLogout} isLoggingOut={isLoggingOut}/>
    </div>
  );
};

export default MenuPage;
