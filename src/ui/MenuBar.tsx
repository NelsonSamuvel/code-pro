import { useContext } from "react";
import { HiMenu, HiXCircle } from "react-icons/hi";
import { HiXMark } from "react-icons/hi2";
import MenuContext, { useMenu } from "../context/MenuProvider";

export default function MenuBar() {
  const { isMenuOpen, handleMenu } = useMenu();

  return (
    <div className="space-x-4 block sm:hidden">
      <button className="rounded-icon" onClick={handleMenu}>
        {!isMenuOpen ? (
          <HiMenu className="custom-icons" />
        ) : (
          <HiXMark className="custom-icons" />
        )}
      </button>
    </div>
  );
}
