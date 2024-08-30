//types
import {
  differenceInDays,
  differenceInMinutes,
  differenceInSeconds,
  subDays,
} from "date-fns";
import { useSearch } from "../../context/SearchProvider";
import { TipsListType } from "../../types/tips/tips.type";
import NotFound from "../../ui/NotFound";

import TipsItem from "./TipsItem";
import { sortByDate } from "../../helpers/utils";
import { useTips } from "./UseTips";
import Spinner from "../../ui/Spinner";

type Name = "title" | "created_at";
type Direction = "asc" | "desc";

function TipsList() {
  const { searchTip, sortTip, view } = useSearch();

  const { tips, isLoading } = useTips();

  if (isLoading) return <Spinner />;

  if (!tips) return <NotFound name="Tips" />;

  let filteredTips = tips;

  if (searchTip.length > 2) {
    filteredTips = tips.filter(
      (tip) =>
        tip.title.toLowerCase().includes(searchTip.toLowerCase()) ||
        tip.content.toLowerCase().includes(searchTip.toLowerCase())
    );
  }

  const [name, direction]: [Name, Direction] = sortTip.split("-") as [
    Name,
    Direction
  ];

  const modifier = direction === "asc" ? 1 : -1;

  if (name === "created_at") {
    const sortByDay = sortByDate(
      filteredTips,
      differenceInDays,
      modifier,
      name
    );
    const sortByMins = sortByDate(
      sortByDay,
      differenceInMinutes,
      modifier,
      name
    );
    filteredTips = sortByDate(sortByMins, differenceInSeconds, modifier, name);
  } else {
    filteredTips =
      modifier > 0
        ? filteredTips.sort((a, b) => a[name].localeCompare(b[name]))
        : filteredTips.sort((a, b) => b[name].localeCompare(a[name]));
  }

  console.log(filteredTips);

  const gridView =
    view === "grid"
      ? "grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4"
      : "";

  return (
    <>
      {!filteredTips.length && <NotFound name="Tips" />}
      <ul className={`${gridView}`}>
        {filteredTips.map((tip) => (
          <TipsItem key={tip.id} tip={tip} />
        ))}
      </ul>
    </>
  );
}

export default TipsList;
