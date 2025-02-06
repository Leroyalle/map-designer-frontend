import { UserRound } from 'lucide-react';
import React from 'react';
import { LogoutBtn } from './logout-btn';
import Link from 'next/link';
import { RoutesEnum } from '@/types';

export const ProfileBtn: React.FC = () => {
  return (
    <div className="flex items-center">
      <Link href={RoutesEnum.PROFILE} className="flex mr-10">
        <UserRound className="mr-4" />
        <span>test@mail.com</span>
      </Link>
      <LogoutBtn />
    </div>
  );
};
