import { useMutation } from "@tanstack/react-query";
import { signUp as signUpApi } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useSignup() {
  const navigate = useNavigate();

  const { mutate: signUp, isPending: isSigning } = useMutation({
    mutationFn: signUpApi,
    onSuccess: (profile) => {
      toast.success(`${profile.username}! Your account has been created`);
      navigate("/login", { replace: true });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { signUp, isSigning };
}
