import { cn } from '@/lib';
import React from 'react';

interface Props {
  image: string;
  toolName: string;
  onClick: () => void;
  className?: string;
}

export const ToolVariant: React.FC<Props> = ({ image, toolName, onClick, className }) => {
  return (
    <div
      className={cn('flex gap-4 items-center cursor-pointer select-none', className)}
      onClick={onClick}>
      <img src={image} alt={toolName} className="w-6 h-6" />
      <span>{toolName}</span>
    </div>
  );
};
