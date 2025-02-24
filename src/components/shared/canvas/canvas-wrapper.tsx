'use client';
import React from 'react';
import { cn } from '@/lib/utils';
import { ProjectResponse, ProjectWithItems } from '@/types';
import { useQuery } from '@tanstack/react-query';
import { projectService } from '@/services';
import { Spinner } from '@heroui/react';
import { CanvasMode } from './canvas-mode';

interface Props {
  isWatchMode?: boolean;
  data: ProjectResponse<ProjectWithItems>;
  isOwner: boolean;
  className?: string;
}

export const CanvasWrapper: React.FC<Props> = ({ isWatchMode, data, isOwner, className }) => {
  const { data: project, isLoading } = useQuery({
    queryKey: ['project', data.data.id],
    queryFn: () => projectService.getOne(data.data.id),
    select: (data) => data.data,
    initialData: data,
    refetchOnWindowFocus: false,
    staleTime: 1 * 60 * 1000,
  });

  if (isLoading) {
    return <Spinner className="absolute bottom-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />;
  }
  console.log('PROJECT_WITH_ITEMS', project);

  return (
    <div className={cn('select-none', className)}>
      <CanvasMode isWatchMode={isWatchMode} project={project} />
    </div>
  );
};
