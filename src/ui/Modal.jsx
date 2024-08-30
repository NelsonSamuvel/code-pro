import { cloneElement, createContext, useContext, useState } from "react";
import { useOutsideClick } from "../hooks/useOutsideClick";

// interface ModalType {
//   open: string;
//   openModal: (value: string) => void;
//   close: () => void;
// }

const ModalContext = createContext();
export default function Modal({ children }) {
  const [open, setOpen] = useState("");

  const close = () => setOpen("");

  const openModal = setOpen;

  return (
    <ModalContext.Provider value={{ open, openModal, close }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens }) {
  const { openModal } = useContext(ModalContext);
  return cloneElement(children, { onClick: () => openModal(opens) });
}

function Window({ children, name }) {
  const { open, close } = useContext(ModalContext);

  const ref = useOutsideClick(close);

  if (open !== name) return null;

  return (
    <div className="fixed inset-0 bg-slate-400/20 backdrop-blur-sm">
      <div className="fixed w-[350px] sm:w-[450px] left-[50%] -translate-x-1/2  mt-10 p-4 flex flex-col bg-white rounded-md" ref={ref}>{cloneElement(children, { onCloseModal: close })}</div>
    </div>
  );
}

Modal.Open = Open;
Modal.Window = Window;
