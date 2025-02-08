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
        <span className="absolute bottom-3 left-3 text-background capitalize sm:text-lg xl:text-xl font-semibold [text-shadow:_0_1px_3px_black]">
          {name}
        </span>
        <div className="w-full h-full">
          <img
            src={imageUrl ? getAbsoluteUrl(imageUrl) : undefined}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </CardContent>
    </Card>
  );
};
