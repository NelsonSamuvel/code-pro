import {
  QueryClient,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { deleteTips as deleteTipsApi } from "../../services/apiTips";
import toast from "react-hot-toast";
import { useAuth } from "../authentication/useAuth";

export function useDeleteTips() {
  const { user } = useAuth();


  const queryClient = useQueryClient();

  const { mutate: deleteTips, isPending: isDeleting } = useMutation({
    mutationFn: deleteTipsApi,
    onSuccess: () => {
      toast.success("Tip deleted successfully");
      queryClient.invalidateQueries({
        queryKey: ["myTips", user?.id],
      });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { deleteTips, isDeleting };
}
