'use client';
import React from 'react';
import { EditorBtns, ProfileBtn } from './components';
import { Typography } from '@/components/ui';
import { useGetMe } from '@/hooks';

interface Props {
  isEditMode?: boolean;
}

export const Header: React.FC<Props> = ({ isEditMode = false }) => {
  const { data: me } = useGetMe();

  if (!me) {
    return null;
  }

  return (
    <header className="bg-[#262626] flex justify-between items-center text-white h-[65px] px-5">
      <Typography>Project name</Typography>
      <Typography className="text-[#878787] select-none">Version 0.1</Typography>
      {isEditMode ? <EditorBtns /> : <ProfileBtn email={'big_duck_bus_🪅'} avatar={undefined} />}
    </header>
  );
};
