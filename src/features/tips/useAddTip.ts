import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addTip as addTipApi } from "../../services/apiTips";
import toast from "react-hot-toast";

export function useAddTip() {
  const queryClient = useQueryClient();

  const { mutate: addTip, isPending: isAdding } = useMutation({
    mutationFn: addTipApi,
    onSuccess: () => {
      toast.success("Tip added successfully");
      queryClient.invalidateQueries({
        queryKey: ["tips"],
      });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { addTip, isAdding };
}
