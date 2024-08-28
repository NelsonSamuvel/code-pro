import { HiSearch } from "react-icons/hi";
import { HiEllipsisHorizontal, HiMiniPlus } from "react-icons/hi2";
import Dropdown from "../../ui/Dropdown";
import { useSearch } from "../../context/SearchProvider";

export default function Searchbar() {
  const { searchTip, updateSearchTip, sortTip, updateSortTip } = useSearch();

  return (
    <div className="flex items-center gap-2">
      <div className="relative grow">
        <input
          type="text"
          className="input pl-10 w-full"
          placeholder="search tips here..."
          value={searchTip}
          onChange={(e) => updateSearchTip(e.target.value)}
        />
        <HiSearch className="h-5 w-5 stroke-slate-500 fill-slate-500 absolute top-[11px] left-2" />
        <button className="absolute top-[11px] right-2">
          <HiEllipsisHorizontal className="h-5 w-5  stroke-slate-500 fill-slate-500 " />
        </button>
      </div>
      <Dropdown
        name="sort"
        value={sortTip}
        onChange={(e) => updateSortTip(e.target.value)}
        options={[
          { label: "Sort by A-Z", value: "title-asc" },
          { label: "Sort by recent first", value: "created_at-desc" },
          { label: "Sort by earlier first", value: "created_at-asc" },
        ]}
      />
      <button className="btn py-2.5 sm:py-2 rounded-md px-2.5">
        <HiMiniPlus className="sm:hidden" />
        <p className="hidden sm:block text-base">Add New </p>
      </button>
    </div>
  );
}
