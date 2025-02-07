import React from 'react';

interface Props {
  category: string;
  className?: string;
}

export const PlaceCategory: React.FC<Props> = ({ category }) => {
  return (
    <div className="flex gap-1 flex-col">
      <h3>Категория</h3>
      <div className="bg-[#FAFAFA] rounded-[5px] w-fit text-[#A1A1A1] p-2">{category}</div>
    </div>
  );
};
