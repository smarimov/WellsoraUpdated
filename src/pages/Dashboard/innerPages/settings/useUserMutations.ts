import { useMutation, useQueryClient } from "@tanstack/react-query";
import { TUser, TUserForm } from "./useUser";
import { updateUserDetail } from "./api";

export const useUserMutations = () => {
  const queryClient = useQueryClient();

  const updateMutation = useMutation<
    TUser,
    Error,
    { updatedData: Partial<TUserForm> }
  >({
    mutationFn: updateUserDetail,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["wellSoraUser"] });
    },
  });

  return {
    updateMutation,
    isUpdating: updateMutation.isPending,
  };
};
