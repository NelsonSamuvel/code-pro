import Searchbar from "../features/tips/Searchbar";
import TipsList from "../features/tips/TipsList";
import SearchProvider from "../context/SearchProvider";
import CategoryFIlter from "../features/tips/CategoryFIlter";


export default function TipsPage() {


  return (
    <SearchProvider>
      <div className="p-4">
        <Searchbar />
        <CategoryFIlter/>
        <TipsList />
      </div>
    </SearchProvider>
  );
}
