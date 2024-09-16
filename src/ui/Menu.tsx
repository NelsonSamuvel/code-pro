import {
  cloneElement,
  createContext,
  ReactElement,
  MouseEvent,
  useContext,
  useState,
  useEffect,
  useRef,
} from "react";
import { ChildrenType } from "../types/children.type";
import { useOutsideClick } from "../hooks/useOutsideClick";

type MenuType = {
  children: ReactElement | ReactElement[];
};

export type MenuContextType = {
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
    setSelectedId((prev) => (prev === id ? null : id));
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

  console.log(selectedId);

  const ref = useOutsideClick(closeMenu);

  if (selectedId !== id) return null;


  return cloneElement(
    <div
      ref={ref}
      className=" border bg-white p-2  shadow-md absolute right-4 top-[58%] z-10"
    >
      {children}
    </div>,
    { closeMenu : closeMenu }
  );
}

Menu.Open = Open;
Menu.Window = Window;

export default Menu;
