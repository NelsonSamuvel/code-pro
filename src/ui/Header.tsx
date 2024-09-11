import { useState } from "react";
import Logo from "./Logo";
import MenuBar from "./MenuBar";
import NavbarList from "./NavbarList";
import MenuPage from "../pages/MenuPage";

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  function handleMenu() {
    setMenuOpen((open) => !open);
  }

  return (
    <header className="flex items-center justify-between p-4 col-span-3">
      <Logo />
      <MenuBar isMenuOpen={isMenuOpen} handleMenu={handleMenu} />
      <NavbarList handleMenu={handleMenu} />
      {isMenuOpen && <MenuPage handleMenu={handleMenu} />}
    </header>
  );
}
