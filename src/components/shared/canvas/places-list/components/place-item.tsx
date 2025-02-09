import { cn } from '@/lib';
import React from 'react';

interface Props {
  title: string;
  floor: number;
  color: string;
  className?: string;
}

export const PlaceItem: React.FC<Props> = ({ title, floor, color, className }) => {
  return (
    <div className={cn('flex  gap-4 min-w-60 h-fit', className)}>
      <div
        style={{ backgroundColor: color }}
        className={`p-5 rounded-[5px] h-[51px] w-[51px]`}></div>
      <div className="flex flex-col gap-2">
        <span className="font-medium">{title}</span>
        <span className="text-[#878787] relative bottom-1">{floor} этаж</span>
      </div>
    </div>
  );
};
