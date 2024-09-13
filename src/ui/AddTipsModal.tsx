import { HiMiniPlus } from "react-icons/hi2";
import Modal from "./Modal";
import AddTipsForm from "../features/tips/AddTipsForm";

const AddTipsModal = () => {
  return (
    <>
      <Modal.Open opens="add">
        <button className="btn py-2.5 sm:py-2.5 md:py-2 rounded-md px-2.5">
          <HiMiniPlus className="sm:hidden" />
          <p className="hidden sm:block  text-sm sm:text-[12px] md:text-[14px] font-semibold">
            Add New Tip{" "}
          </p>
        </button>
      </Modal.Open>
      <Modal.Window name="add">
        <AddTipsForm />
      </Modal.Window>
    </>
  );
};

export default AddTipsModal;
