import { useMutation } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogin() {
  const navigate = useNavigate();

  const { mutate: login, isLoggingIn } = useMutation({
    mutationFn: loginApi,
    onSuccess: () => {
      toast.success("Logged in successfully");
      navigate("/tips", { replace: true });
    },
    onError: (err) => {
      console.log(err.message);
    },
  });

  return { login, isLoggingIn };
}
