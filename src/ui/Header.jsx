import { HiArrowRightOnRectangle, HiMiniUserCircle } from "react-icons/hi2";
import RoundedIcon from "./RoundedIcon";
import ProfileInfo from "./ProfileInfo";
import Logout from "../features/authentication/Logout";

function Header() {
  return (
    <div className="">
      <div className="flex items-center justify-end px-4 py-4 gap-4 sm:gap-6">
        <ProfileInfo />
        <Logout />
      </div>
    </div>
  );
}

export default Header;
