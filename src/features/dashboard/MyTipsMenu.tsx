const MyTipsMenu = () => {
  return (
    <ul className="text-right space-y-4">
      <li>
        <button className="hover:bg-green-500 px-2 py-1 hover:text-white w-full sm:btn sm:bg-green-500">
          Edit
        </button>
      </li>
      <li>
        <button className="hover:bg-red-500 px-2 py-1 hover:text-white sm:btn sm:bg-red-500">
          Delete
        </button>
      </li>
    </ul>
  );
};

export default MyTipsMenu;
