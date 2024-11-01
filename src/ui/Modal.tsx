import {
  cloneElement,
  createContext,
  LegacyRef,
  ReactElement,
  useContext,
  useState,
} from "react";
import { useOutsideClick } from "../hooks/useOutsideClick";

interface ModalContextType {
  open: string;
  openModal: React.Dispatch<React.SetStateAction<string>>;
  close: () => void;
}

interface ModalType {
  children: React.ReactNode;
  opens: string;
  name: string;
}

export type onCloseProp = {
  onCloseModal?: () => void;
};

const ModalContext = createContext<ModalContextType | undefined>(undefined);
export default function Modal({ children }: Partial<ModalType>) {
  const [open, setOpen] = useState("");

  const close = () => setOpen("");

  const openModal = setOpen;

  return (
    <ModalContext.Provider value={{ open, openModal, close }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens }: Partial<ModalType>) {
  const { openModal } = useContext<ModalContextType | undefined>(ModalContext)!;
  return cloneElement(children as ReactElement, {
    onClick: () => opens && openModal(opens),
  });
}

function Window({ children, name }: Partial<ModalType>) {
  const { open, close } = useContext(ModalContext)!;

  const ref = useOutsideClick(close);

  if (open !== name) return null;

  const closeModals: onCloseProp = { onCloseModal: close };

  return (
    <div className="fixed inset-0 bg-slate-400/20 backdrop-blur-sm z-10 flex justify-center items-center">
      <div
        className="fixed inset-6 w-[400px] sm:w-[500px] mx-auto p-4 flex flex-col justify-center bg-white rounded-md z-20"
        ref={ref}
      >
        {cloneElement(children as ReactElement, closeModals)}
      </div>
    </div>
  );
}

Modal.Open = Open;
Modal.Window = Window;
