import { useQuery } from "@tanstack/react-query";
import { getCategoryPerTip } from "../../services/apiCategories";

export const useCategoryTip = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["Tip-Category"],
    queryFn: getCategoryPerTip,
  });

  return { data, isLoading };
};
