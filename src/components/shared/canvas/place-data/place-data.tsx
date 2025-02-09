import { cn } from '@/lib';
import React from 'react';
import { PlaceCategory, PlaceDataHeader, PlaceInfoBlock, PlaceTimeInfo } from './components';
import { Button } from '@/components/ui';

interface Props {
  className?: string;
}

export const PlaceData: React.FC<Props> = ({ className }) => {
  const isOpenPlace = true;
  const category = 'Библиотека';
  const placeColor = '#bd35b6';
  const floor = 2;
  const shortDesc = 'Библиотека русской литературы' + ', ' + floor + ' этаж';
  return (
    <div
      className={cn(
        'shadow-md max-w-[324px] flex flex-col p-5 gap-y-[25px] rounded-[10px]',
        className,
      )}>
      <PlaceDataHeader color={placeColor} />

      <PlaceInfoBlock text={shortDesc} title="Большой лекторий" />
      <hr className=" border-[#eee9ee]" />
      <PlaceInfoBlock
        title="Описание"
        text="Кстати, интерактивные прототипы смешаны с не уникальными данными до степени совершенной неузнаваемости"
      />

      <PlaceTimeInfo isOpenPlace={isOpenPlace} time={new Date()} />

      <PlaceCategory category={category} />

      <Button className="rounded-[5px] p-5">Перейти на сайт</Button>
    </div>
  );
};
