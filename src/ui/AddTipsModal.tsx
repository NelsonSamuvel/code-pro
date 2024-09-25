import { HiMiniPlus } from "react-icons/hi2";
import Modal from "./Modal";
import AddTipsForm from "../features/tips/AddTipsForm";
import Button from "../components/ui/Button";

const AddTipsModal = () => {
  return (
    <>
      <Modal.Open opens="add">
        <Button>
          <HiMiniPlus className="sm:hidden" />
          <p className="hidden sm:block  text-sm sm:text-[12px] md:text-[14px] font-semibold">
            Add New Tip{" "}
          </p>
        </Button>
      </Modal.Open>
      <Modal.Window name="add">
        <AddTipsForm />
      </Modal.Window>
    </>
  );
};

export default AddTipsModal;
