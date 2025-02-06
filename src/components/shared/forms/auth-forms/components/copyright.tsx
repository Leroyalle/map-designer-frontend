import React from 'react';
import { Typography } from '@/components/ui';
import { cn } from '@/lib/utils';

interface Props {
  className?: string;
}

export const Copyright: React.FC<Props> = ({ className }) => {
  return (
    <Typography className={cn('text-foreground/50', className)}>
      © 2025 Конструктор, все права защищены
    </Typography>
  );
};
