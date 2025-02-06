import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui';
import { Plus } from 'lucide-react';
import { useAppContext } from '@/hooks';

interface Props {
  className?: string;
}

export const NewMapButton: React.FC<Props> = ({ className }) => {
  const { onChange } = useAppContext();
  return (
    <Card
      className={cn('bg-gray-200/15 rounded-[10px] cursor-pointer ', className)}
      onClick={onChange}>
      <CardContent className="flex flex-col items-center justify-center p-0 text-foreground/30 h-full">
        <Plus size={26} />
        <span className="font-medium">Новая карта</span>
      </CardContent>
    </Card>
  );
};
