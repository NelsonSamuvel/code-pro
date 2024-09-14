import { TipType, useEditTip } from "../../store/useEditTip";
import Modal from "../../ui/Modal";
import AddTipsForm from "../tips/AddTipsForm";

type PropsType = {
  isDeleting: boolean;
  onDelete: () => void;
  tip: TipType;
  onEdit: (tip: TipType) => void;
};

const MyTipsMenu = ({ onDelete, isDeleting, onEdit, tip }: PropsType) => {
  console.log(tip);

  return (
    <Modal>
      <ul className="text-right space-y-4 sm:space-y-0  md:flex items-center sm:gap-2 sm:text-white justify-between">
        <li>
          <Modal.Open opens="edit">
            <button
              onClick={() => {
                onEdit(tip);
              }}
              className="hover:bg-green-500 px-2 py-1 hover:text-white w-full sm:btn sm:bg-green-500 rounded-sm"
            >
              Edit
            </button>
          </Modal.Open>
        </li>
        <li>
          <button
            className="hover:bg-red-500 px-2 py-1 hover:text-white sm:btn sm:bg-red-500 rounded-sm disabled:bg-red-800 disabled:text-white"
            onClick={onDelete}
            disabled={isDeleting}
          >
            Delete
          </button>
        </li>
      </ul>
      <Modal.Window name="edit">
        <AddTipsForm />
      </Modal.Window>
    </Modal>
  );
};

export default MyTipsMenu;
