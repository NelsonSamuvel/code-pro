const MyTipsMenu = () => {
  return (
    <>
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
    </>
  );
};

export default MyTipsMenu;
