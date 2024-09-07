import {
  cloneElement,
  createContext,
  ReactElement,
  MouseEvent,
  useContext,
  useState,
} from "react";
import { ChildrenType } from "../types/children.type";
import { useOutsideClick } from "../hooks/useOutsideClick";

type MenuType = {
  children: ReactElement | ReactElement[];
};

type MenuContextType = {
  selectedId: number | null;
  handleSelectedId: (id: number) => void;
  closeMenu: () => void;
};

const initContext: MenuContextType = {
  selectedId: null,
  handleSelectedId: (id: number) => {},
  closeMenu: () => {},
};

const MenuContext = createContext<MenuContextType>(initContext);

const Menu = ({ children }: MenuType) => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  function handleSelectedId(id: number) {
    setSelectedId(id);
  }

  function closeMenu() {
    setSelectedId(null);
  }

  return (
    <MenuContext.Provider value={{ selectedId, handleSelectedId, closeMenu }}>
      {children}
    </MenuContext.Provider>
  );
};

function Open({ selectedId, children }: Partial<MenuContextType> & MenuType) {
  const { selectedId: menuId, handleSelectedId } = useContext(MenuContext);

  return cloneElement(children as ReactElement, {
    onClick: (e: MouseEvent<HTMLButtonElement>) => {
      return handleSelectedId(selectedId as number);
    },
  });
}

type MenuWindowType = {
  id: number;
};

function Window({ id, children }: MenuWindowType & ChildrenType) {
  const { selectedId, closeMenu } = useContext(MenuContext);

  const ref = useOutsideClick(closeMenu);

  if (selectedId !== id) return null;

  return (
    <div
      ref={ref}
      className="text-right space-y-4 border bg-white p-2  shadow-md absolute right-4 top-14 z-10"
    >
      {children}
    </div>
  );
}

Menu.Open = Open;
Menu.Window = Window;

export default Menu;