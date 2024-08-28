import { NavLink } from "react-router-dom";
import Button from "./Button";

export default function NavbarList() {
  return (
    <div className="space-x-4 hidden sm:block">
      <NavLink
        to="/tips"
        className={({ isActive }) =>
          isActive
            ? "border-b-2 border-stone-700 pb-1"
            : "hover:border-b-2 border-stone-700 pb-1"
        }
      >
        <button className="nav-btn">Tips</button>
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive
            ? "border-b-2 border-stone-700 pb-1"
            : "hover:border-b-2 border-stone-700 pb-1"
        }
      >
        <button className="nav-btn">Contact</button>
      </NavLink>
      <Button type="secondary">Profile</Button>
    </div>
  );
}
