import React from 'react';
import { EditorBtns, LoginedUser } from './components';

export const Header: React.FC = () => {
  const isEdit = true;
  return (
    <header className="bg-[#262626] flex justify-between items-center text-white h-[65px] px-5">
      <p>Конструктор карт</p>
      <p className="text-[#878787]">Version 0.1</p>
      {isEdit ? <EditorBtns /> : <LoginedUser />}
    </header>
  );
};
