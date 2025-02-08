'use client';
import { Button } from '@/components/ui';
import { NavRoutesEnum } from '@/types';
import { useRouter } from 'next/navigation';
import React from 'react';

interface Props {
  className?: string;
}

export const LogoutBtn: React.FC<Props> = ({ className }) => {
  const router = useRouter();
  const handleLogout = () => {
    router.push(NavRoutesEnum.AUTH);
  };
  return (
    <div className={className}>
      <Button variant="ghost" onClick={handleLogout}>
        Выйти
      </Button>
    </div>
  );
};
