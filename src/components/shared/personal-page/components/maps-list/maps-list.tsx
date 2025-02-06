import React from 'react';
import { cn } from '@/lib/utils';
import { MapItem } from './map-item';
import { NewMapButton } from './new-map-button';

interface Props {
  items: string[];
  className?: string;
}

export const MapsList: React.FC<Props> = ({ items, className }) => {
  return (
    <div
      className={cn(
        'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5',
        className,
      )}>
      <NewMapButton />
      {items.map((_, i) => (
        <MapItem key={i} />
      ))}
    </div>
  );
};
