import { Typography } from '@/components/ui';
import { cn } from '@/lib';
import React from 'react';

interface Props {
  title: string;
  text: string;
  className?: string;
}

export const PlaceInfoBlock: React.FC<Props> = ({ title, text, className }) => {
  return (
    <div className={cn('flex flex-col gap-1', className)}>
      <h3 className="font-medium">{title}</h3>
      <Typography className="text-[#878787]">{text}</Typography>
    </div>
  );
};
