'use client';
import { cn } from '@/lib';
import React from 'react';
import { PlaceItem } from './components';
import { FilteredInput } from '@/components/ui';
import { ProjectItem } from '@/types';

interface Props {
  items: ProjectItem[];
  className?: string;
}

export const PlacesList: React.FC<Props> = ({ items, className }) => {
  const [searchValue, setSearchValue] = React.useState('');

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchValue.toLowerCase()),
  );
  console.log(items);
  const clearInput = () => setSearchValue('');
  return (
    <div
      className={cn(
        'max-w-[364px] bg-background overflow-auto rounded-[10px] shadow-md flex flex-col scrollbar',
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

            <PlaceItem color={item.placeColor} title={item.name} floor={item.floor} />
          </div>
        ))}
      </div>
    </div>
  );
};
