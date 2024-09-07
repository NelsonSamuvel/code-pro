import { createContext, ReactElement, useContext, useState } from "react";

type ChildrenType = {
  children: ReactElement | ReactElement[];
};

const useMenuContext = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  function handleMenu() {
    setMenuOpen((menu) => !menu);
  }

  return { isMenuOpen, handleMenu };
};

type MenuContextType = ReturnType<typeof useMenuContext>;

const initMenu: MenuContextType = {
  isMenuOpen: false,
  handleMenu: () => {},
};

const MenuContext = createContext<MenuContextType>(initMenu);

export const MenuProvider = ({ children }: ChildrenType): ReactElement => {
  return (
    <MenuContext.Provider value={useMenuContext()}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = (): MenuContextType => {
  const context = useContext(MenuContext);
  if (context === undefined)
    throw new Error("context value is used outside of provider");
  return context;
};

export default MenuContext;
