import { DialogDescription, DialogHeader, DialogTitle } from '@/components/ui';
import React from 'react';

export const DialogHeaderBlock: React.FC = () => {
  return (
    <DialogHeader className="text-start">
      <DialogTitle>Новый проект</DialogTitle>
      <DialogDescription>Назовите проект и загрузите карту</DialogDescription>
    </DialogHeader>
  );
};
