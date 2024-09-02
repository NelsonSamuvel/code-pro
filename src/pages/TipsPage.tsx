import Searchbar from "../features/tips/Searchbar";
import TipsList from "../features/tips/TipsList";
import SearchProvider from "../context/SearchProvider";


export default function TipsPage() {


  return (
    <SearchProvider>
      <div className="p-4">
        <Searchbar />
        <TipsList />
      </div>
    </SearchProvider>
  );
}
