import { useQuery } from "@tanstack/react-query";
import { getFavorites } from "../../services/apiFavorites";

export function useFavorites() {
  const { data: favorites, isLoading } = useQuery({
    queryKey: ["favorites"],
    queryFn: getFavorites,
  });

  return { favorites, isLoading };
}
