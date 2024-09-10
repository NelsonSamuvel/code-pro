//types
import {
  differenceInDays,
  differenceInMinutes,
  differenceInSeconds,
  subDays,
} from "date-fns";
import { useSearch } from "../../context/SearchProvider";

import NotFound from "../../ui/NotFound";

import TipsItem from "./TipsItem";
import { sortByDate } from "../../helpers/utils";
import { useTips } from "./UseTips";
import Spinner from "../../ui/Spinner";
import { useSearchParams } from "react-router-dom";


type Name = "title" | "created_at";
type Direction = "asc" | "desc";

function TipsList() {
  const { searchTip, sortTip, view } = useSearch();

  const { tips, isLoading } = useTips();

  const [searchParams] = useSearchParams();


  if (isLoading) return <Spinner />;

  if (!tips) return <NotFound name="Tips" />;

  const categoryVal = searchParams.get("category") || "all";
  let filteredTips = tips;

  if (categoryVal !== "all") {
    filteredTips = filteredTips.filter(
      (tip) => tip.categories.name === categoryVal
    );
  }

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
