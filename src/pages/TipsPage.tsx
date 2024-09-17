import Searchbar from "../features/tips/Searchbar";
import TipsList from "../features/tips/TipsList";
import CategoryFIlter from "../features/tips/CategoryFIlter";
import FavoritesList from "../features/favorites/FavoritesList";
import { useGlobalLoading } from "../store/useGlobalLoading";
import Spinner from "../ui/Spinner";

export default function TipsPage() {
  // const isGlobalLoading = useGlobalLoading((state) => state.isGlobalLoading);

  // console.log(isGlobalLoading);

  // if (isGlobalLoading) return <Spinner />;

  return (
    <>
      <div className="p-6">
        <Searchbar />
        <CategoryFIlter />
        <FavoritesList />
        <TipsList />
      </div>
    </>
  );
}
