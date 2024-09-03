import { HiUser } from "react-icons/hi2";
import { useAuth } from "../features/authentication/useAuth";
import { useLogout } from "../features/authentication/useLogout";
import Spinner from "../ui/Spinner";
import { useOutsideClick } from "../hooks/useOutsideClick";
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import { useMenu } from "../context/MenuProvider";

const MenuPage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const { logout, isLoggingOut } = useLogout();
  const {handleMenu} = useMenu();

  const ref = useOutsideClick(handleMenu);

  // if (isLoggingOut) return <Spinner />;

  function handleAccountBtn() {
    handleMenu();
    navigate("/account");
  }

  return (
    <div
      ref={ref}
      className="flex flex-col gap-2 items-start  fixed left-0 right-0 top-14  border-b-2 shadow-sm sm:left-auto sm:right-4 sm:mt-4 bg-white sm:border sm:rounded-md p-4"
    >
      <div className="flex justify-between items-center gap-4 py-2 px-1 w-full">
        <p className="text-lg sm:text-base tracking-wide">{user?.email}</p>
        <HiUser className="" />
      </div>
      <NavLink to="/account" className={({isActive})=> isActive ?  "bg-stone-100 w-[100%]" : "w-[100%]"} >
        <button
          onClick={handleAccountBtn}
          className="hover:bg-stone-100 text-[17px] sm:text-base text-stone-500 py-2 px-1  text-start w-full"
        >
          Account Settings
        </button>
      </NavLink>
      <button
        className="hover:bg-stone-100  text-[17px] sm:text-base text-stone-500 py-2 px-1 w-full text-start"
        onClick={logout}
      >
        Logout
      </button>
    </div>
  );
};

export default MenuPage;
