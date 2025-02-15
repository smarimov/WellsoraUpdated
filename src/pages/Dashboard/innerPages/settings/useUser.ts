import { useQuery } from "@tanstack/react-query";
import { fetchUserDetail } from "./api";
export type TUser = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  telephone: string;
};
export type TUserForm = {
  firstName: string;
  lastName: string;
  telephone: string;
};
export const useUserDetail = () => {
  return useQuery<TUser>({
    queryKey: ["wellSoraUser"],
    queryFn: fetchUserDetail,
    staleTime: 1000 * 60 * 5, // Cache for 5 minutes
    retry: 1, // Retry once on failure
  });
};
