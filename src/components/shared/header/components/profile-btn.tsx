import React from 'react';
import { LogoutBtn } from './logout-btn';
import Link from 'next/link';
import { NavRoutesEnum } from '@/types';
import { cn } from '@/lib/utils';
import { Typography } from '@/components/ui';
import { Avatar } from '@heroui/react';

interface Props {
  email: string;
  avatar?: string;
  className?: string;
}

export const ProfileBtn: React.FC<Props> = ({ email, avatar, className }) => {
  return (
    <div className={cn('flex items-center', className)}>
      <Link href={NavRoutesEnum.PROFILE} className="flex items-center mr-10">
        <Avatar src={avatar} size="sm" className="mr-4" />
        <Typography>{email}</Typography>
      </Link>
      <LogoutBtn />
    </div>
  );
};
