import { Button, CardFooter } from '@/components/ui';
import React from 'react';

interface Props {
  onClose: () => void;
}

export const ObjectBtns: React.FC<Props> = ({ onClose }) => {
  return (
    <CardFooter className="flex items-center justify-between">
      <Button
        type="button"
        variant="ghost"
        className="text-background border-[1px] border-background"
        onClick={onClose}>
        Закрыть
      </Button>
      <Button type="submit">Сохранить</Button>
    </CardFooter>
  );
};
