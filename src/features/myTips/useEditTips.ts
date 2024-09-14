import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateTips as updateTipsApi } from "../../services/apiTips";
import toast from "react-hot-toast";
import { useAuth } from "../authentication/useAuth";

export function useEditTips() {
  const queryClient = useQueryClient();

  const { user } = useAuth();

  const { mutate: updateTips, isPending: isUpdating } = useMutation({
    mutationFn: updateTipsApi,
    onSuccess: (tip) => {
      toast.success(`Tip#${tip.id} updated successfully`);
      if (user?.id) {
        queryClient.invalidateQueries({
          queryKey: ["myTips", user.id],
        });
      }
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { updateTips, isUpdating };
}
