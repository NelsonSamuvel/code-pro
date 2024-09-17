import { useQuery } from "@tanstack/react-query";
import { getTips } from "../../services/apiTips";
import { useGlobalLoading } from "../../store/useGlobalLoading";

export function useTips() {

  const {
    data: tips,
    isLoading,
  } = useQuery({
    queryKey: ["tips"],
    queryFn: getTips,
  });

  return { tips, isLoading };
}
