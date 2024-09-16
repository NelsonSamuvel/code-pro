import NotFound from "../../ui/NotFound";

import TipsItem from "./TipsItem";
import Spinner from "../../ui/Spinner";
import { useSearchFilter } from "../../store/useSearchFilter";
import { useFilterTips } from "./useFilterTips";
import { useTips } from "./UseTips";

function TipsList() {
  const view = useSearchFilter((state) => state.view);

  const { tips, isLoading } = useTips();

  const sortedTips = useFilterTips(tips?.length ? tips : []);

  if (isLoading) return <Spinner />;

  if (!sortedTips.length) return <NotFound name="Tips" />;

  const gridView =
    view === "grid"
      ? "grid-card"
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
