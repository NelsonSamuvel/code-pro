import { HiUser } from "react-icons/hi2";
import { NavLink } from "react-router-dom";
import { ActiveType, MenuPropsType } from "./SIdeMenu";
import { useAuth } from "../../features/authentication/useAuth";

type PropsType = {
  onNavigate: (path: string) => void;
  onLogout: () => void;
  isLoggingOut: boolean;
};

const mainNav = ({ isActive }: ActiveType) =>
  isActive
    ? "bg-stone-200 hover:font-semibold w-[100%]"
    : "w-[100%] hover:font-semibold";

const ProfileMenu = ({ onNavigate, onLogout, isLoggingOut }: PropsType) => {
  const { user } = useAuth();
  return (
    <>
      <h2 className="text-xl font-semibold mt-4 px-1 sm:hidden">Profile</h2>
      <div className="flex justify-between items-center gap-4 py-2 px-2 w-full">
        <p className="text-lg sm:text-base tracking-wide">{user?.email}</p>
        <HiUser className="" />
      </div>
      <NavLink to="/dashboard" className={mainNav}>
        <button
          onClick={() => onNavigate("/dashboard")}
          className="hover:bg-stone-100 hover:font-semibold text-[17px] sm:text-base text-stone-500 py-2 px-2  text-start w-full"
        >
          Dashboard
        </button>
      </NavLink>
      <NavLink to="/account" className={mainNav}>
        <button
          onClick={() => onNavigate("/account")}
          className="hover:bg-stone-100 hover:font-semibold text-[17px] sm:text-base text-stone-500 py-2 px-2  text-start w-full"
        >
          Account Settings
        </button>
      </NavLink>
      <button
        className=" bg-stone-800 text-white hover:font-semibold text-[17px] sm:text-base py-2 px-2 w-full text-start"
        onClick={onLogout}
        disabled={isLoggingOut}
      >
        Logout
      </button>
    </>
  );
};

export default ProfileMenu;
