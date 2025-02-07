import { projectService } from '@/services';
import { useMutation } from '@tanstack/react-query';

export const useCreateProject = () => {
  const createProjectMutation = useMutation({
    mutationFn: projectService.create,
  });

  return {
    createProject: createProjectMutation.mutate,
    isPending: createProjectMutation.isPending,
    isError: createProjectMutation.isError,
  };
};
