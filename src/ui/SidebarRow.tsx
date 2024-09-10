import { ReactElement } from "react";
import { NavLink } from "react-router-dom";

type PropsType = {
  to: string;
  children: ReactElement | ReactElement[];
};

function SidebarRow({ children, to }: PropsType): ReactElement {
  return (
    <NavLink
      to={`/${to}`}
      className={({ isActive }) => `
    flex flex-col sm:flex-row items-center sm:gap-4 hover:bg-stone-100 text-sm  sm:text-lg px-5  w-full mx-auto justify-between
    ${isActive ? "bg-stone-200" : ""}
    `}
    >
      {children}
    </NavLink>
  );
}

export default SidebarRow;
