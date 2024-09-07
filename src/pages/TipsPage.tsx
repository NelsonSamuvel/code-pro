import Searchbar from "../features/tips/Searchbar";
import TipsList from "../features/tips/TipsList";
import SearchProvider from "../context/SearchProvider";
import CategoryFIlter from "../features/tips/CategoryFIlter";
import { useMenu } from "../context/MenuProvider";
import MenuPage from "./MenuPage";

export default function TipsPage() {
  return (
    <SearchProvider>
      <div className="p-6">
        <Searchbar />
        <CategoryFIlter />
        <TipsList />
      </div>
    </SearchProvider>
  );
}
