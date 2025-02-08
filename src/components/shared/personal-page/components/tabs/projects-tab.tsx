'use client';
import React from 'react';
import { useInfiniteScrollProjects } from '@/hooks';
import { MapsList } from '../maps-list';
import { Spinner } from '@heroui/react';

interface Props {
  className?: string;
}

export const ProjectsTab: React.FC<Props> = ({ className }) => {
  const { data: projects, cursor, isFetchingNextPage } = useInfiniteScrollProjects();

  if (!projects) {
    return <div>Нет проектов</div>;
  }

  return (
    <>
      <MapsList items={projects} className={className} />
      {cursor}
      {isFetchingNextPage && <Spinner color="warning" className="w-full mx-auto mb-2" />}
    </>
  );
};
