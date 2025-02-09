import { Button, CardFooter } from '@/components/ui';
import React from 'react';

export const ObjectBtns: React.FC = () => {
  return (
    <CardFooter className="flex items-center justify-between">
      <Button
        type="button"
        variant="ghost"
        className="text-background border-[1px] border-background">
        Закрыть
      </Button>
      <Button type="submit">Сохранить</Button>
    </CardFooter>
  );
};
