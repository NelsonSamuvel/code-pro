import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addTip as addTipApi } from "../../services/apiTips";
import toast from "react-hot-toast";
import { useAuth } from "../authentication/useAuth";

export function useAddTip() {
  const queryClient = useQueryClient();

  const { user } = useAuth();

  const { mutate: addTip, isPending: isAdding } = useMutation({
    mutationFn: addTipApi,
    onSuccess: () => {
      toast.success("Tip added successfully");
      queryClient.invalidateQueries({
        queryKey: ["tips"],
      });
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

  return { addTip, isAdding };
}
