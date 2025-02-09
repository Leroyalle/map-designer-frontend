import React from 'react';
import { cn } from '@/lib/utils';
import { MapItem } from './map-item';
import { NewMapButton } from './new-map-button';
import { Project } from '@/types';
import { EmptyState } from '@/components/ui';
import { Skeleton } from '@heroui/react';

interface Props {
  items?: Project[];
  isLoading?: boolean;
  isError?: boolean;
  className?: string;
}

export const MapsList: React.FC<Props> = ({ items, isLoading, isError, className }) => {
  const gridMesh = 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5';

  if (isLoading) {
    return (
      <div className={cn(gridMesh, className)}>
        {[...Array(5).keys()].fill(0).map((_, i) => (
          <Skeleton key={i} className="max-w-[300px] h-40 rounded-[10px]" />
        ))}
      </div>
    );
  }

  if (!items || items.length === 0 || isError) {
    return <EmptyState imageUrl="/img/empty-states/projects-not-found.jpg" />;
  }

  return (
    <div className={cn(gridMesh, className)}>
      <NewMapButton />
      {items.map((item, i) => (
        <MapItem key={i} name={item.name} imageUrl={item.imageUrl} />
      ))}
    </div>
  );
};
