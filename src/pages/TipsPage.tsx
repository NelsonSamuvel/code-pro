import Searchbar from "../features/tips/Searchbar";
import TipsList from "../features/tips/TipsList";
import SearchProvider from "../context/SearchProvider";
import { useTips } from "../features/tips/UseTips";
import Spinner from "../ui/Spinner";
import NotFound from "../ui/NotFound";

export default function TipsPage() {
  const { tips, isLoading } = useTips();

  if(isLoading) return <Spinner/>

  if (!tips) return <NotFound name="Tips" />;

  return (
    <SearchProvider>
      <div className="p-4">
        <Searchbar />
        <TipsList tips={tips} />
      </div>
    </SearchProvider>
  );
}