import { useMutation } from "@tanstack/react-query";
import { addTip as addTipApi } from "../../services/apiTips";
import toast from "react-hot-toast";

export function useAddTip() {
  const { mutate: addTip, isPending: isAdding } = useMutation({
    mutationFn: addTipApi,
    onSuccess: () => {
      toast.success("Tip added successfully");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { addTip, isAdding };
}
