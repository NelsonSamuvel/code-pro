import NotFound from "../../ui/NotFound";

import TipsItem from "./TipsItem";
import Spinner from "../../ui/Spinner";
import { useSearchFilter } from "../../store/useSearchFilter";
import { useFilterTips } from "./useFilterTips";
import { useTips } from "./UseTips";
import { useFavorites } from "../favorites/useFavorites";
import { useAddRemoveFavorites } from "../favorites/useAddRemoveFavorites";
import { useEffect } from "react";
import { useGlobalLoading } from "../../store/useGlobalLoading";

function TipsList() {
  const view = useSearchFilter((state) => state.view);

  const setGlobalLoading = useGlobalLoading((state) => state.setGlobalLoading);

  const { tips, isLoading, isSuccess, isError } = useTips();

  const { favorites, isLoading: isLoadingFavorites } = useFavorites();

  const { addToFavorites, isAdding } = useAddRemoveFavorites();

  const sortedTips = useFilterTips(tips?.length ? tips : []);


  // useEffect(()=>{
  //   if(isLoading){
  //     setGlobalLoading(true)
  //   }

  //   if(isSuccess || isError){
  //     setGlobalLoading(false);
  //   }
  // },[isLoading])

  if(isLoading) return <Spinner/>

  if (!sortedTips) return null;

  if (!sortedTips.length) return <NotFound name="Tips" />;
  const gridView = view === "grid" ? "grid-card" : "";
  const favoriteTip = favorites?.map((favorite) => favorite.id);

  return (
    <>
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
    </>
  );
}

export default TipsList;
