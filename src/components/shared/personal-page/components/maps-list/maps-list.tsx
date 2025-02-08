import React from 'react';
import { cn } from '@/lib/utils';
import { MapItem } from './map-item';
import { NewMapButton } from './new-map-button';
import { Project } from '@/types';
import { EmptyState } from '@/components/ui';

interface Props {
  items: Project[];
  className?: string;
}

export const MapsList: React.FC<Props> = ({ items, className }) => {
  if (items.length === 0) {
    return <EmptyState imageUrl="/img/empty-states/projects-not-found.jpg" />;
  }

  return (
    <div
      className={cn(
        'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5',
        className,
      )}>
      <NewMapButton />
      {items.map((item, i) => (
        <MapItem key={i} name={item.name} imageUrl={item.imageUrl} />
      ))}
    </div>
  );
};
