import { cn } from '@/lib';
import React from 'react';

interface Props {
  image: string;
  toolName: string;
  className?: string;
}

export const ToolVariant: React.FC<Props> = ({ image, toolName, className }) => {
  return (
    <div className={cn('flex gap-4 items-center cursor-pointer select-none', className)}>
      <img src={image} alt={toolName} className="w-8 h-8" />
      <span>{toolName}</span>
    </div>
  );
};
