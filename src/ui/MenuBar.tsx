
import { HiMenu } from "react-icons/hi";
import { HiXMark } from "react-icons/hi2";

type PropsType = {
  isMenuOpen : boolean,
  handleMenu : ()=>void;
}

export default function MenuBar({isMenuOpen,handleMenu}:PropsType) {

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
