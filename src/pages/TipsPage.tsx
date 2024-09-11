import Searchbar from "../features/tips/Searchbar";
import TipsList from "../features/tips/TipsList";
import CategoryFIlter from "../features/tips/CategoryFIlter";

export default function TipsPage() {
  return (
    <div className="p-6">
      <Searchbar />
      <CategoryFIlter />
      <TipsList />
    </div>
  );
}
