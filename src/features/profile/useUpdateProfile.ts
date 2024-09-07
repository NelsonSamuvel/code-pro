import { useMutation } from "@tanstack/react-query";
import { updateProfile as updateProfileApi } from "../../services/apiProfiles";
import toast from "react-hot-toast";

export function useUpdateProfile() {
  const { mutate: updateProfile, isPending: isUpdating } = useMutation({
    mutationFn: updateProfileApi,
    onSuccess: () => {
      toast.success("Profile updated Successfully");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { updateProfile, isUpdating };
}
