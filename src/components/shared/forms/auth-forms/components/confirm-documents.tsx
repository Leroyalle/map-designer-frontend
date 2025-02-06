import React from 'react';
import { cn } from '@/lib/utils';
import { Checkbox, Typography } from '@/components/ui';
import { Link } from '@heroui/react';

interface Props {
  isConfirmed: boolean;
  isSubscribed: boolean;
  onConfirm: () => void;
  onSubscribe: () => void;
  className?: string;
}

export const ConfirmDocuments: React.FC<Props> = ({
  isConfirmed,
  isSubscribed,
  onConfirm,
  onSubscribe,
  className,
}) => {
  return (
    <div className={cn('flex flex-col gap-y-[25px]', className)}>
      <div className="flex items-center gap-x-[10px]">
        <Checkbox checked={isConfirmed} onClick={onConfirm} />
        <Typography>
          Я принимаю <Link>Лицензионное соглашение</Link> и соглашаюсь на{' '}
          <Link>обработку персональных</Link> данных
        </Typography>
      </div>
      <div className="flex items-center gap-x-[10px]">
        <Checkbox checked={isSubscribed} onClick={onSubscribe} />
        <Typography>
          Я соглашаюсь получать рекламно-информационные материалы в соответствии с{' '}
          <Link>соглашением</Link>
        </Typography>
      </div>
    </div>
  );
};
