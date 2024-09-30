import { useQuery } from "@tanstack/react-query";
import { checkAuth } from "../../services/apiAuth";

export function useAuth() {
  const { data: user, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: checkAuth,
  });

  return {
    isLoading,
    isAuthenticated: user?.role === "authenticated",
    user,
  };
}
