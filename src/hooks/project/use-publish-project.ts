import { toastMessageHandler } from '@/lib';
import { projectService } from '@/services';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

export const usePublishProject = () => {
  const queryClient = useQueryClient();
  const publishProjectMutation = useMutation({
    mutationFn: projectService.publish,
    onSuccess: () => {
      toast.success('Проект опубликован', {
        description: 'Отправьте ссылку чтобы поделиться проектом',
      });
    },
    onError: (error) => {
      toastMessageHandler(error);
    },
    onSettled: (project) => {
      queryClient.invalidateQueries({ queryKey: ['projects'] });
      queryClient.invalidateQueries({ queryKey: ['project', project?.data.id] });
    },
  });

  return {
    publishProject: publishProjectMutation.mutate,
    isPending: publishProjectMutation.isPending,
    isError: publishProjectMutation.isError,
  };
};
