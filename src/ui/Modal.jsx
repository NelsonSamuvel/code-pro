import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
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

  return cloneElement(children, { onCloseModal: close });
}

Modal.Open = Open;
Modal.Window = Window;
