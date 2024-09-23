import Modal from "../../ui/Modal";
import AddTipsForm, { TipType } from "../tips/AddTipsForm";

type PropsType = {
  isDeleting: boolean;
  onDelete: () => void;
  tip: TipType;
  category: string;
};

const MyTipsMenu = ({ onDelete, isDeleting, tip, category }: PropsType) => {
  return (
    <Modal>
      <ul className="text-right  sm:space-y-0  flex flex-col md:flex-row md:items-center sm:gap-2 sm:text-white justify-between">
        <li>
          <Modal.Open opens="edit">
            <button className="hover:bg-blue-500 px-2 py-1 hover:text-white w-full sm:btn sm:bg-blue-600 rounded-sm">
              Edit
            </button>
          </Modal.Open>
        </li>
        <li>
          <button
            className="hover:bg-stone-600 px-2 py-1 hover:text-white btn sm:bg-stone-800 rounded-sm disabled:bg-stone-500 disabled:text-white"
            onClick={onDelete}
            disabled={isDeleting}
          >
            Delete
          </button>
        </li>
      </ul>
      <Modal.Window name="edit">
        <AddTipsForm tipToEdit={tip} category={category} />
      </Modal.Window>
    </Modal>
  );
};

export default MyTipsMenu;
