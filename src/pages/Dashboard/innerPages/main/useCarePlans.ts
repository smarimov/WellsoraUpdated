import { useQuery } from "@tanstack/react-query";
import { fetchAllCarePlans, Plan } from "./api";

export const useCarePlans = () => {
  return useQuery<Plan[]>({
    queryKey: ["carePlans"],
    queryFn: fetchAllCarePlans,
    staleTime: 1000 * 60 * 5, // Cache for 5 minutes
    retry: 1, // Retry once on failure
  });
};
