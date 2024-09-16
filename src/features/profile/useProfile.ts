import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { getProfile } from "../../services/apiProfiles";

export function useProfile() {
  const { data: profile, isLoading } = useQuery({
    queryKey: ["profile"],
    queryFn: () => getProfile(),
  });

  return { profile, isLoading };
}
