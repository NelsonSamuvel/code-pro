

type PropsType = {
  isDeleting: boolean;
  onDelete: () => void;
};

const MyTipsMenu = ({ onDelete, isDeleting }: PropsType) => {
  return (
    <ul className="text-right space-y-4 sm:space-y-0  md:flex items-center sm:gap-2 sm:text-white justify-between">
      <li>
        <button className="hover:bg-green-500 px-2 py-1 hover:text-white w-full sm:btn sm:bg-green-500 rounded-sm">
          Edit
        </button>
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
  );
};

export default MyTipsMenu;
