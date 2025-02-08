import { Card, CardContent } from '@/components/ui';
import { getAbsoluteUrl } from '@/lib';
import { cn } from '@/lib/utils';
import React from 'react';

interface Props {
  name: string;
  imageUrl: string | null;
  className?: string;
}

export const MapItem: React.FC<Props> = ({ name, imageUrl, className }) => {
  return (
    <Card
      className={cn('bg-gray-200/15 rounded-[10px] max-w-[300px] h-40 overflow-hidden', className)}>
      <CardContent className="w-full h-full p-0 relative">
        <img
          src={imageUrl ? getAbsoluteUrl(imageUrl) : undefined}
          alt=""
          className="w-full h-full object-cover"
        />
        <span className="absolute bottom-3 left-3 text-background capitalize sm:text-lg xl:text-xl font-semibold text-shad">
          {name}
        </span>
      </CardContent>
    </Card>
  );
};
