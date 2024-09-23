import NotFound from "../../ui/NotFound";

import TipsItem from "./TipsItem";
import { useSearchFilter } from "../../store/useSearchFilter";
import { useFilterTips } from "./useFilterTips";
import { useAddRemoveFavorites } from "../favorites/useAddRemoveFavorites";
import { TipsType } from "../../services/apiTips";

type PropsType = {
  tips: TipsType[];
  favorites: TipsType[];
};

function TipsList({ tips, favorites }: PropsType) {
  const view = useSearchFilter((state) => state.view);

  const { addToFavorites, isAdding } = useAddRemoveFavorites();

  const sortedTips = useFilterTips(tips?.length ? tips : []);

  if (!sortedTips) return null;

  if (!sortedTips.length) return <NotFound name="Tips" />;

  const gridView = view === "grid" ? "grid-card" : "";
  const favoriteTip = favorites?.map((favorite) => favorite.id);

  return (
    <div className="max-container py-6">
      <ul className={`${gridView}`}>
        {sortedTips.map((tip) => (
          <TipsItem
            key={tip.id}
            tip={tip}
            favorites={favoriteTip as number[]}
            isAdding={isAdding}
            addToFavorites={addToFavorites}
          />
        ))}
      </ul>
    </div>
  );
}

export default TipsList;
