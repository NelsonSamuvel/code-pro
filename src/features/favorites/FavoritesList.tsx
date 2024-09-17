import { useEffect, useState } from "react";
import { HiChevronDown, HiChevronRight } from "react-icons/hi2";
import { getFavorites } from "../../services/apiFavorites";
import { useFavorites } from "./useFavorites";
import Spinner from "../../ui/Spinner";
import FavoriteItem from "./FavoriteItem";
import { useAddRemoveFavorites } from "./useAddRemoveFavorites";
import { useTips } from "../tips/UseTips";
import { useGlobalLoading } from "../../store/useGlobalLoading";

const FavoritesList = () => {
  const [showFavorites, setShowFavorites] = useState(false);

  const setGlobalLoading = useGlobalLoading((state) => state.setGlobalLoading);

  const { favorites } = useFavorites();

  const { addToFavorites, isAdding: isAddingFavorites } =
    useAddRemoveFavorites();

  if (!favorites?.length) return null;

  return (
    <div className="mt-4">
      <div
        className="hover:bg-stone-200 flex items-center gap-2 p-1 rounded-sm w-max pr-2 cursor-pointer"
        onClick={() => setShowFavorites((show) => !show)}
      >
        {showFavorites ? <HiChevronDown /> : <HiChevronRight />}

        <span>Your Favorites ({favorites.length})</span>
      </div>
      {showFavorites && (
        <ul className="grid-card py-4">
          {favorites?.map((favorite) => (
            <FavoriteItem
              favorite={favorite}
              isAdding={isAddingFavorites}
              addToFavorites={addToFavorites}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default FavoritesList;
