import React, { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface Props {
  children: ReactNode;
  className?: string;
}

export const Typography: React.FC<Props> = ({ children, className }) => {
  return <p className={cn('text-sm', className)}>{children}</p>;
};
