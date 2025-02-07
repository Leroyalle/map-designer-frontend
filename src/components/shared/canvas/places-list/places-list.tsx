'use client';
import { cn } from '@/lib';
import React from 'react';
import { PlaceItem } from './components';
import { FilteredInput } from '@/components/ui';

interface Props {
  className?: string;
}
const mapItems = [
  {
    title: 'Арт-маркет',
    floor: 1,
    color: '#8596BD',
  },
  {
    title: 'Большой лекторий',
    floor: -1,
    color: '#FFBA00',
  },
  {
    title: 'Зона полезной программы',
    floor: 3,
    color: '#FE70AF',
  },
  {
    title: 'Гардеробная',
    floor: 2,
    color: '#48BE38',
  },
  {
    title: 'Аквариум',
    floor: 1,
    color: '#77DDE7',
  },
];

export const PlacesList: React.FC<Props> = ({ className }) => {
  const [searchValue, setSearchValue] = React.useState('');

  const filteredItems = mapItems.filter((item) =>
    item.title.toLowerCase().includes(searchValue.toLowerCase()),
  );

  const clearInput = () => setSearchValue('');
  return (
    <div
      className={cn(
        'max-w-[364px]  bg-background overflow-auto max-h-screen rounded-[10px] shadow-md flex flex-col scrollbar',
        className,
      )}>
      <FilteredInput
        className="m-5"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        onClear={clearInput}
      />

      <hr className=" border-[#E9ECEE] border-1" />

      <div className="m-5">
        {filteredItems.map((item, id) => (
          <div key={id} className="mb-5">
            {id > 0 && <hr className="border-[#E9ECEE] border-1 mb-5" />}

            <PlaceItem color={item.color} title={item.title} floor={item.floor} />
          </div>
        ))}
      </div>
    </div>
  );
};
