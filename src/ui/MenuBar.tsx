import { useContext } from "react";
import { HiMenu, HiXCircle } from "react-icons/hi";
import { HiXMark } from "react-icons/hi2";
import MenuContext, { useMenu } from "../context/MenuProvider";

export default function MenuBar() {
  const { isMenuOpen, handleMenu } = useMenu();

  return (
    <div className="block sm:hidden">
      {!isMenuOpen ? (
        <button className="rounded-icon" onClick={handleMenu} id="nav-btn">
          <HiMenu className="custom-icons" />
        </button>
      ) : (
        <button className="rounded-icon" onClick={handleMenu} id="nav-btn">
          <HiXMark className="custom-icons" />
        </button>
      )}
    </div>
  );
}
