import Logo from "./Logo";
import { HiMenu } from "react-icons/hi";
import MenuBar from "./MenuBar";
import NavbarList from "./NavbarList";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4">
      <Logo />
      <MenuBar/>
      <NavbarList/>
    </header>
  );
}
