import { Button, DialogFooter, Typography } from '@/components/ui';
import React from 'react';

export const PublishedPopupFooter: React.FC = () => {
  return (
    <DialogFooter className="sm:justify-start">
      <div className="flex flex-col">
        <Button type="button" className=" text-lg my-10 py-7">
          Открыть карту
        </Button>
        <Typography>
          Перейдя по ссылке, пожалуйста, обновите страницу, чтобы увидеть изменения. (Ваш браузер
          может сохранять старую версию карты)
        </Typography>
      </div>
    </DialogFooter>
  );
};
