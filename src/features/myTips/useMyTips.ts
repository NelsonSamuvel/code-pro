import { useQuery } from "@tanstack/react-query";
import { getMyTips } from "../../services/apiTips";

export function useMyTips() {
  const {
    data: myTips,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["myTips"],
    queryFn: getMyTips,
  });

  return { myTips, isLoading, error };
}
