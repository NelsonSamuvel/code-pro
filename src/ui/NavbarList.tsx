import { NavLink } from "react-router-dom";
import Button from "./Button";

type PropsType = {
  handleMenu: () => void;
};

export default function NavbarList({ handleMenu }: PropsType) {
  return (
    <div className="space-x-4 hidden sm:block relative font-montserrat font-medium">
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
      <Button
        disabled={false}
        type="secondary"
        onClick={handleMenu}
        id="nav-btn"
      >
        Profile
      </Button>
    </div>
  );
}
