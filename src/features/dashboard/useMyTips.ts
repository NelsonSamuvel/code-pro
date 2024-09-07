import { useQuery } from "@tanstack/react-query";
import { getMyTips } from "../../services/apiTips";

export function useMyTips(user_id: string) {
  const { data: myTips, isLoading } = useQuery({
    queryKey: ["myTips", user_id],
    queryFn: () => getMyTips(user_id),
    enabled: !!user_id,
  });

  return { myTips, isLoading };
}
