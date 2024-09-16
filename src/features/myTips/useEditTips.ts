import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateTips as updateTipsApi } from "../../services/apiTips";
import toast from "react-hot-toast";

export function useEditTips() {
  const queryClient = useQueryClient();

  const { mutate: updateTips, isPending: isUpdating } = useMutation({
    mutationFn: updateTipsApi,
    onSuccess: (tip) => {
      toast.success(`Tip#${tip.id} updated successfully`);
      queryClient.invalidateQueries({
        queryKey: ["tips"],
      });
      queryClient.invalidateQueries({
        queryKey: ["myTips"],
      });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { updateTips, isUpdating };
}
