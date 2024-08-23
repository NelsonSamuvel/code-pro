import { NavLink } from "react-router-dom";

function SidebarRow({ children }) {
  return (
    <NavLink className="flex flex-col sm:flex-row items-center">
      {children}
    </NavLink>
  );
}

export default SidebarRow;
