import { useQuery } from "@tanstack/react-query";
import { getMyTips } from "../../services/apiTips";

export function useMyTips(user_id: string | undefined) {
  const {
    data: myTips,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["myTips", user_id],
    queryFn: () => {
      if (!user_id) {
        throw new Error("Failed to fetch user's tips");
      } else {
        return getMyTips(user_id);
      }
    },
    enabled: !!user_id,
  });

  return { myTips, isLoading, error };
}
