import { Button } from '@/components/ui';
import React from 'react';

interface Props {
  className?: string;
}

export const LogoutBtn: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <Button variant="ghost">Выйти</Button>
    </div>
  );
};
