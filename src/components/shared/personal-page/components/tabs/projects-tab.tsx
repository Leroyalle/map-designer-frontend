'use client';
import React from 'react';
import { useInfiniteScrollProjects } from '@/hooks';
import { MapsList } from '../maps-list';
import { Spinner } from '@heroui/react';

interface Props {
  className?: string;
}

export const ProjectsTab: React.FC<Props> = ({ className }) => {
  const {
    data: projects,
    isPending,
    isError,
    cursor,
    isFetchingNextPage,
  } = useInfiniteScrollProjects();

  return (
    <>
      <MapsList items={projects} isLoading={isPending} isError={isError} className={className} />
      {cursor}
      {isFetchingNextPage && <Spinner className="w-full mx-auto mb-2" />}
    </>
  );
};
