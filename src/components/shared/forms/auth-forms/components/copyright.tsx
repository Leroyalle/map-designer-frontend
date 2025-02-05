import React from 'react';
import { Typography } from '@/components/ui';

interface Props {
  className?: string;
}

export const Copyright: React.FC<Props> = ({ className }) => {
  return <Typography className={className}>© 2025 Конструктор, все права защищены</Typography>;
};
