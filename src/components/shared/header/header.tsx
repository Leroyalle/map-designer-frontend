import React from 'react';
import { EditorBtns, ProfileBtn } from './components';
import { Typography } from '@/components/ui';

export const Header: React.FC = () => {
  const isEdit = true;
  return (
    <header className="bg-[#262626] flex justify-between items-center text-white h-[65px] px-5">
      <Typography>Конструктор карт</Typography>
      <Typography className="text-[#878787]">Version 0.1</Typography>
      {isEdit ? <EditorBtns /> : <ProfileBtn />}
    </header>
  );
};
