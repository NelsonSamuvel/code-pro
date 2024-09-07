import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { getProfile } from "../../services/apiProfiles";

export function useProfile(id: string | undefined) {
  const { data: profile, isLoading } = useQuery({
    queryKey: ["profile", id],
    queryFn: () => getProfile(id as string),
    enabled: !!id,
  });

  return { profile, isLoading };
}
