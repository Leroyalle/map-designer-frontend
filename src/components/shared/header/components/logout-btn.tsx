import React from 'react';

interface Props {
  className?: string;
}

export const LogoutBtn: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <p>Выйти</p>
    </div>
  );
};
