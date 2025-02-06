import React from 'react';
import { cn } from '@/lib/utils';
import { Label, Switch, Typography } from '@/components/ui';

interface Props {
  needCallValue: boolean;
  changeCallValue: () => void;
  className?: string;
}

export const OrderACall: React.FC<Props> = ({ needCallValue, changeCallValue, className }) => {
  return (
    <div
      className={cn('flex items-start gap-x-5 border-1 border-gray-200 p-5 rounded-xl', className)}>
      <Switch id="order-a-call" checked={needCallValue} onClick={changeCallValue} />
      <div className="flex flex-col gap-y-5">
        <Label className="text-foreground font-medium" htmlFor="order-a-call">
          Заказать обратный звонок
        </Label>
        <Typography>
          После регистрации наш менеджер свяжется <br /> с вами и ответит на все вопросы по сервису
        </Typography>
      </div>
    </div>
  );
};
