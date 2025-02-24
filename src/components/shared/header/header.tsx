'use client';
import React from 'react';
import { EditorBtns, ProfileBtn } from './components';
import { Typography } from '@/components/ui';
import { useGetMe } from '@/hooks';
import { cn } from '@/lib';
import { NavRoutesEnum } from '@/types';
import Link from 'next/link';

interface Props {
  isEditMode?: boolean;
  className?: string;
}

export const Header: React.FC<Props> = ({ isEditMode = false, className }) => {
  const { data: me } = useGetMe();

  if (!me) {
    return null;
  }

  return (
    <header
      className={cn(
        'bg-[#262626] flex justify-between items-center text-white h-[65px] px-5',
        className,
      )}>
      <Link href={NavRoutesEnum.PROFILE}>Project name</Link>
      <Typography className="text-[#878787] select-none">Version 0.1</Typography>
      {isEditMode ? <EditorBtns /> : <ProfileBtn email={'big_duck_bus_🪅'} avatar={undefined} />}
    </header>
  );
};
