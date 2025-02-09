import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui';
import { cn } from '@/lib';
import React from 'react';
import { Controller, FieldError } from 'react-hook-form';

interface Props {
  setMapTypeValue: (value: string) => void;
  errorMap: FieldError | undefined;
  mapTypeValue: string;
}

const roomTypes = [
  { name: 'Библиотека' },
  { name: 'Гардеробная' },
  { name: 'Игровая зона' },
  { name: 'Квартира' },
  { name: 'Кладовка' },
  { name: 'Котельная' },
  { name: 'Лофт' },
  { name: 'Мастерская' },
  { name: 'Офис' },
  { name: 'Пентхаус' },
  { name: 'Подвал' },
  { name: 'Ресторан' },
  { name: 'Серверная' },
  { name: 'Склад' },
  { name: 'Спортивный зал' },
  { name: 'Торговый зал' },
  { name: 'Цех' },
  { name: 'Чердак' },
];

export const ObjectSelector: React.FC<Props> = ({ setMapTypeValue, mapTypeValue, errorMap }) => {
  return (
    <Controller
      name="mapType"
      defaultValue="Тип помещения"
      render={({ field }) => (
        <Select
          onValueChange={(value) => {
            field.onChange(value);
            setMapTypeValue(value);
          }}
          value={mapTypeValue}>
          <SelectTrigger
            className={cn(
              'bg-[#373737] max-w-[50%] rounded-[5px] select-none focus:outline-0 focus:ring-0 rouded-[5px] w-[220px]',
              errorMap ? 'border-2 border-red-700' : 'border-0',
            )}>
            <SelectValue placeholder="Тип помещения" />
          </SelectTrigger>
          <SelectContent className="bg-[#373737] text-background border-0 rounded-[5px]">
            {roomTypes.map((place, id) => (
              <SelectItem
                key={id}
                value={place.name}
                onClick={() => field.onChange(place.name)}
                className="rounded-[5px] focus:bg-[#505050] focus:text-background">
                {place.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      )}
    />
  );
};
