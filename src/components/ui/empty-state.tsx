import React from 'react';
import { cn } from '@/lib/utils';

interface Props {
  imageUrl: string;
  className?: string;
}

export const EmptyState: React.FC<Props> = ({ imageUrl, className }) => {
  return (
    <div className={cn('max-w-[600px] max-h-[600px] mx-auto', className)}>
      <img src={imageUrl} alt="empty state" className="w-full h-full" />
    </div>
  );
};
