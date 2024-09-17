import { useQuery } from "@tanstack/react-query";
import { getTips } from "../../services/apiTips";
import { useGlobalLoading } from "../../store/useGlobalLoading";

export function useTips() {
  const setGlobalLoading = useGlobalLoading((state) => state.setGlobalLoading);

  const {
    data: tips,
    isLoading,
    isSuccess,
    isError,
  } = useQuery({
    queryKey: ["tips"],
    queryFn: getTips,
  });

  return { tips, isLoading, isSuccess, isError };
}
