import { cn } from '@/lib';
import React from 'react';

interface Props {
  image: string;
  toolName: string;
  className?: string;
}

export const ToolVariant: React.FC<Props> = ({ image, toolName, className }) => {
  return (
    <div
      className={cn('px-5 py-2.5 flex gap-4 items-center cursor-pointer select-none', className)}>
      <img src={image} alt={toolName} className="w-6 h-6" />
      <span>{toolName}</span>
    </div>
  );
};
