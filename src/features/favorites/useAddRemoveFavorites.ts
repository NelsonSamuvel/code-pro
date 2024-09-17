import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addToFavorites as addToFavoritesApi } from "../../services/apiFavorites";
import toast from "react-hot-toast";

export function useAddRemoveFavorites() {
  const queryClient = useQueryClient();

  const { mutate: addToFavorites, isPending: isAdding } = useMutation({
    mutationFn: addToFavoritesApi,
    onSuccess: (data) => {
      if (!data) {
        toast.success("Removed from favorites");
      } else {
        toast.success("Added To Favorites");
      }
      queryClient.invalidateQueries({
        queryKey: ["favorites"],
      });
    },
  });

  return { addToFavorites, isAdding };
}
