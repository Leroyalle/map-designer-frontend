'use client';
import { cn } from '@/lib';
import React, { useState } from 'react';
import { PlaceItem, PlaceDrawer } from './components';
import { FilteredInput } from '@/components/ui';
import { ProjectItem } from '@/types';

interface Props {
  items: ProjectItem[];
  className?: string;
}

export const PlacesList: React.FC<Props> = ({ items, className }) => {
  const [searchValue, setSearchValue] = useState('');
  const [selectedPlace, setSelectedPlace] = useState<ProjectItem | null>(null);
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchValue.toLowerCase()),
  );

  const onClickItem = (item: ProjectItem) => {
    setIsOpenDrawer(true);
    setSelectedPlace(item);
  };

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

      <hr className="border-[#E9ECEE] border-1" />
      <PlaceDrawer
        isOpen={isOpenDrawer && selectedPlace !== null}
        placeData={selectedPlace!}
        onOpenChange={() => setIsOpenDrawer(!isOpenDrawer)}
      />
      <div className="p-5">
        {filteredItems.map((item, id) => (
          <div key={id} className="mb-5" onClick={() => onClickItem(item)}>
            {id > 0 && <hr className="border-[#E9ECEE] border-1 mb-5" />}

            <PlaceItem color={item.placeColor} title={item.name} floor={item.floor} />
          </div>
        ))}
      </div>
    </div>
  );
};
