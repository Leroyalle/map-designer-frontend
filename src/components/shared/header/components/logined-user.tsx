import { UserRound } from 'lucide-react';
import React from 'react';
import { LogoutBtn } from './logout-btn';

export const LoginedUser: React.FC = () => {
  return (
    <div className="flex ">
      <div className="flex mr-10">
        <UserRound className="mr-4" />
        <span>test@mail.com</span>
      </div>
      <LogoutBtn />
    </div>
  );
};
