import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  createCarePlan,
  updateCarePlan,
  deleteCarePlan,
  Plan,
  TCreatePlan,
} from "./api";

export const useCarePlanMutations = () => {
  const queryClient = useQueryClient();

  const createMutation = useMutation<Plan, Error, TCreatePlan>({
    mutationFn: createCarePlan,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["carePlans"] });
    },
  });

  const updateMutation = useMutation<
    Plan,
    Error,
    { id: string; updatedData: Partial<TCreatePlan> }
  >({
    mutationFn: updateCarePlan,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["carePlans"] });
    },
  });

  const deleteMutation = useMutation<{ success: boolean }, Error, string>({
    mutationFn: deleteCarePlan,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["carePlans"] });
    },
  });

  return {
    createMutation,
    updateMutation,
    deleteMutation,
    isDeleting: deleteMutation.isPending,
    isCreating: createMutation.isPending,
    isUpdating: updateMutation.isPending,
  };
};
