import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui';
import { useAppContext } from '@/hooks';

interface Props {
  className?: string;
}

export const CreateNewProjectButton: React.FC<Props> = ({ className }) => {
  const { onChange } = useAppContext();
  return (
    <Button
      className={cn('text-background py-8 px-12 text-lg font-extralight', className)}
      onClick={onChange}>
      <p className="text-3xl mr-1">+</p>
      <p className="font-semibold">Создать проект</p>
    </Button>
  );
};
