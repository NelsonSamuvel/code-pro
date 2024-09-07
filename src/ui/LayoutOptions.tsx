import { HiViewGrid, HiViewList } from "react-icons/hi";

type viewType = {
  view: string;
  updateView: (value: string) => void;
};

export default function LayoutOptions({ view, updateView }: viewType) {
  return (
    <div className="border h-10 sm:flex items-center hidden rounded-md overflow-hidden">
      <div className="flex  cursor-pointer">
        <button
          className={`px-2 py-2.5 ${view === "grid" ? "bg-stone-200" : ""}`}
          onClick={() => updateView("grid")}
        >
          <HiViewGrid className="h-5 w-5 fill-stone-600" />
        </button>
        <button
          className={` px-2 py-2.5 ${view === "list" ? "bg-stone-200" : ""}`}
          onClick={() => updateView("list")}
        >
          <HiViewList className="h-5 w-5 fill-stone-600" />
        </button>
      </div>
    </div>
  );
}
