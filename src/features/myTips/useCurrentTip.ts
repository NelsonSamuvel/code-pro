import { useQuery } from "@tanstack/react-query";
import { getCurrentTip } from "../../services/apiTips";

export function useCurrentTip(tipId: number) {
  const { data: tip, isLoading } = useQuery({
    queryKey: ["tip", tipId],
    queryFn: () => getCurrentTip(tipId),
  });

  return { tip, isLoading };
}
