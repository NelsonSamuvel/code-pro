import Searchbar from "../features/tips/Searchbar";
import TipsList from "../features/tips/TipsList";
import CategoryFIlter from "../features/tips/CategoryFIlter";
import FavoritesList from "../features/favorites/FavoritesList";
import Spinner from "../ui/Spinner";
import { useTips } from "../features/tips/UseTips";
import NotFound from "../ui/NotFound";
import { useFavorites } from "../features/favorites/useFavorites";
import { useCategories } from "../features/tips/useCategories";

export default function TipsPage() {
  const { tips, isLoading } = useTips();
  const { favorites, isLoading: isLoadingFavorites } = useFavorites();
  const { categories, isLoading: isLoadingCategories } = useCategories();

  if (isLoading || isLoadingFavorites || isLoadingCategories)
    return <Spinner />;

  if (!categories?.length) return null;

  console.log(favorites);

  return (
    <>
      <div className="p-6">
        <Searchbar />
        <CategoryFIlter categories={categories} />
        <FavoritesList />
        {tips?.length ? (
          <TipsList tips={tips} favorites={favorites} />
        ) : (
          <NotFound name="tips" />
        )}
      </div>
    </>
  );
}
