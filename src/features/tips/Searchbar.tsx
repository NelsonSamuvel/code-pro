import { HiSearch } from "react-icons/hi";
import { HiEllipsisHorizontal, HiMiniPlus } from "react-icons/hi2";
import DropDown from "../../ui/Dropdown";
import Modal from "../../ui/Modal.jsx";
import AddTipsForm from "./AddTipsForm";
import LayoutOptions from "../../ui/LayoutOptions";
import { useEffect, useState } from "react";
import { useSearchFilter } from "../../store/useSearchFilter";
import AddTipsModal from "../../ui/AddTipsModal";
import Input from "../../components/ui/Input";

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
        <div className="relative grow overflow-hidden md:overflow-visible">
          <Input
            className="pl-10 w-full"
            placeholder="Search tips here..."
            value={searchTip}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              updateSearchTip(e.target.value)
            }
          />

          <HiSearch className="h-5 w-5 stroke-slate-500 fill-slate-500 absolute top-[11px] left-2" />
          <div
            className="absolute top-0 right-0 flex items-center justify-center hover:bg-stone-100 rounded-md w-10 h-12 text-center cursor-pointer md:hidden"
            onClick={() => setHideFilters((prev) => !prev)}
          >
            <button className="absolute top-2.5">
              <HiEllipsisHorizontal className="h-5 w-5 md:hidden  stroke-slate-500 fill-slate-500 " />
            </button>
          </div>
        </div>

        <DropDown
          isHide={true}
          name="sort"
          value={sortTip}
          onChange={(e) => updateSortTip(e.target.value)}
          options={options}
        />

        <ul
          className={`${isHidden} md:hidden z-20 fixed border-2 bottom-0 w-full bg-white px-6 py-6 pt-10 left-0 rounded-lg  space-y-2`}
        >
          {options?.map((option) => {
            const activeSort = option.value === sortTip ? "bg-stone-100" : "";
            return (
              <li
                key={option.value}
                className={`hover:bg-stone-100 ${activeSort}`}
              >
                <button
                  className="w-full rounded-md text-left p-2 "
                  onClick={() => updateSortTip(option.value)}
                >
                  {option.label}
                </button>
              </li>
            );
          })}
        </ul>
        <LayoutOptions view={view} updateView={updateView} />
        <AddTipsModal />
      </div>
    </Modal>
  );
}
