import { HiSearch } from "react-icons/hi";
import { HiEllipsisHorizontal, HiMiniPlus } from "react-icons/hi2";
import Dropdown from "../../ui/Dropdown";
import Modal from "../../ui/Modal.jsx";
import AddTipsForm from "./AddTipsForm";
import LayoutOptions from "../../ui/LayoutOptions";
import { useEffect, useState } from "react";
import { useSearchFilter } from "../../store/useSearchFilter";

const options = [
  { label: "Sort by A-Z", value: "title-asc" },
  { label: "Sort by recent first", value: "created_at-desc" },
  { label: "Sort by earlier first", value: "created_at-asc" },
];

export default function Searchbar() {
  const [isHideFilters, setHideFilters] = useState(false);

  const {
    searchTip,
    updateSearchTip,
    sortTip,
    updateSortTip,
    view,
    updateView,
  } = useSearchFilter((state) => state);

  const isHidden = isHideFilters ? "hidden" : "";

  useEffect(() => {
    setHideFilters(true);
  }, [sortTip]);

  return (
    <Modal>
      <div className="flex items-center gap-2">
        <div className="relative grow overflow-hidden">
          <input
            type="text"
            className="input pl-10 w-full"
            placeholder="search tips here..."
            value={searchTip}
            onChange={(e) => updateSearchTip(e.target.value)}
          />
          <HiSearch className="h-5 w-5 stroke-slate-500 fill-slate-500 absolute top-[11px] left-2" />
          <div
            className="absolute top-0 right-0 flex items-center justify-center hover:bg-stone-200 rounded-md w-10 h-12 text-center cursor-pointer sm:hidden"
            onClick={() => setHideFilters((prev) => !prev)}
          >
            <button className="absolute top-2.5">
              <HiEllipsisHorizontal className="h-5 w-5 sm:hidden  stroke-slate-500 fill-slate-500 " />
            </button>
          </div>
        </div>

        <Dropdown
          isHide={true}
          updateSortTip={updateSortTip}
          name="sort"
          value={sortTip}
          onChange={(e) => updateSortTip(e.target.value)}
          options={options}
        />

        <ul
          className={`${isHidden} sm:hidden fixed border-2 bottom-0 w-full bg-white px-6 py-2 left-0  space-y-2`}
        >
          {options?.map((option) => (
            <li key={option.value}>
              <button
                className="w-full rounded-md text-left p-2 hover:bg-stone-100"
                onClick={() => updateSortTip(option.value)}
              >
                {option.label}
              </button>
            </li>
          ))}
        </ul>
        <LayoutOptions view={view} updateView={updateView} />
        <Modal.Open opens="add">
          <button className="btn py-2.5 sm:py-2.5 md:py-2 rounded-md px-2.5">
            <HiMiniPlus className="sm:hidden" />
            <p className="hidden sm:block  text-sm sm:text-[12px] md:text-[14px] font-semibold">
              Add New{" "}
            </p>
          </button>
        </Modal.Open>
        <Modal.Window name="add">
          <AddTipsForm />
        </Modal.Window>
      </div>
    </Modal>
  );
}
