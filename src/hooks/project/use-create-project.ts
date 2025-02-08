import { projectService } from '@/services';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useCreateProject = () => {
  const queryClient = useQueryClient();
  const createProjectMutation = useMutation({
    mutationFn: projectService.create,
    onSettled: () => queryClient.invalidateQueries({ queryKey: ['projects'] }),
  });

  return {
    createProject: createProjectMutation.mutate,
    isPending: createProjectMutation.isPending,
    isError: createProjectMutation.isError,
  };
};
