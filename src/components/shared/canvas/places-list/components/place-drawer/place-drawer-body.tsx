import React from 'react';
import { cn } from '@/lib/utils';
import { Button, Typography } from '@/components/ui';

interface Props {
  shortDesc: string;
  desc: string;
  floor: number;
  time: string;
  link: string;
  className?: string;
}

export const PlaceDrawerBody: React.FC<Props> = ({
  shortDesc,
  desc,
  floor,
  time,
  link,
  className,
}) => {
  return (
    <div className={cn('flex flex-col gap-y-2', className)}>
      <div>
        <b>Описание</b>
        <Typography>{shortDesc}</Typography>
        <Typography>{desc}</Typography>
      </div>
      <Typography>{floor} этаж</Typography>
      <Typography>{time}</Typography>
      <Button asChild>
        <a href={link} target="_blank">
          Перейти на сайт
        </a>
      </Button>
    </div>
  );
};
