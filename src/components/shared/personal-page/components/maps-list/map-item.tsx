import { Card, CardContent } from '@/components/ui';
import { cn } from '@/lib/utils';
import React from 'react';

interface Props {
  className?: string;
}

export const MapItem: React.FC<Props> = ({ className }) => {
  return (
    <Card className={cn('bg-gray-200/15 rounded-[10px] h-40', className)}>
      <CardContent></CardContent>
    </Card>
  );
};
