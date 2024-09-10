import { NavLink } from "react-router-dom";

export type ActiveType = { isActive: boolean };

export type MenuPropsType = {
  onNavigate: (path: string) => void;
};

const SideMenu = ({ onNavigate }: MenuPropsType) => {
  const btnStyles = ({ isActive }: ActiveType): string =>
    isActive ? "bg-stone-200 w-[100%] sm:hidden" : "sm:hidden w-[100%]";

  return (
    <>
      <NavLink to="/tips" className={btnStyles}>
        <button
          onClick={() => onNavigate("/tips")}
          className=" hover:bg-stone-100 hover:font-semibold text-[17px] sm:text-base text-stone-500 py-2 px-2  text-start w-full"
        >
          Tips
        </button>
      </NavLink>
      <NavLink to="/contact" className={btnStyles}>
        <button
          onClick={() => onNavigate("/contact")}
          className="hover:bg-stone-100 hover:font-semibold text-[17px] sm:text-base text-stone-500 py-2 px-2  text-start w-full"
        >
          Contact
        </button>
      </NavLink>
    </>
  );
};

export default SideMenu;
