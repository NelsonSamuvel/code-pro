import NotFound from "../../ui/NotFound";

import TipsItem from "./TipsItem";
import Spinner from "../../ui/Spinner";
import { useSearchFilter } from "../../store/useSearchFilter";
import { useFilterTips } from "./useFilterTips";

function TipsList() {
  const view = useSearchFilter((state) => state.view);

  const { sortedTips, isLoading } = useFilterTips();

  if (isLoading) return <Spinner />;

  if (!sortedTips.length) return <NotFound name="Tips" />;

  const gridView =
    view === "grid"
      ? "grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4"
      : "";

  return (
    <>
      <ul className={`${gridView}`}>
        {sortedTips.map((tip) => (
          <TipsItem key={tip.id} tip={tip} />
        ))}
      </ul>
    </>
  );
}

export default TipsList;
