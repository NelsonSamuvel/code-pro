import { useSearchParams } from "react-router-dom";
import { useSearchFilter } from "../../store/useSearchFilter";
import { useMemo } from "react";
import { sortByDate } from "../../helpers/utils";
import {
  differenceInDays,
  differenceInMinutes,
  differenceInSeconds,
} from "date-fns";
import { useTips } from "./UseTips";
import { TipsType } from "../../services/apiTips";

type Name = "title" | "created_at";
type Direction = "asc" | "desc";

type FilterTipsType = {
  sortedTips: TipsType[];
  isLoading: boolean;
};

export const useFilterTips = (): FilterTipsType => {
  const { tips, isLoading } = useTips();

  const [searchParams] = useSearchParams();
  const searchTip = useSearchFilter((state) => state.searchTip);
  const sortTip = useSearchFilter((state) => state.sortTip);
  const categoryVal = searchParams.get("category") || "all";

  const filteredTips = useMemo(() => {
    if (categoryVal === "all") {
      return tips;
    }
    return tips?.filter((tip) => tip.categories.name === categoryVal);
  }, [tips, categoryVal]);

  const searchedTip = useMemo(() => {
    if (searchTip.length > 2) {
      return filteredTips?.filter(
        (tip) =>
          tip.title.toLowerCase().includes(searchTip.toLowerCase()) ||
          tip.content.toLowerCase().includes(searchTip.toLowerCase())
      );
    }
    return filteredTips;
  }, [searchTip, filteredTips]);

  const [name, direction]: [Name, Direction] = sortTip.split("-") as [
    Name,
    Direction
  ];
  const modifier = direction === "asc" ? 1 : -1;

  const sortedTips = useMemo(() => {
    if (name === "created_at") {
      const sortByDay = sortByDate(
        searchedTip,
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
      return sortByDate(sortByMins, differenceInSeconds, modifier, name);
    } else {
      return modifier > 0
        ? searchedTip?.sort((a, b) => a[name].localeCompare(b[name]))
        : searchedTip?.sort((a, b) => b[name].localeCompare(a[name]));
    }
  }, [searchedTip, sortTip]);

  return { sortedTips, isLoading };
};