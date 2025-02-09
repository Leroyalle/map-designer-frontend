import { X } from 'lucide-react';
import React from 'react';

interface Props {
  color: string;
}

export const PlaceDataHeader: React.FC<Props> = ({ color }) => {
  return (
    <div className="flex justify-between">
      <div
        style={{ backgroundColor: color }}
        className={'p-5 rounded-[5px] h-[51px] w-[51px] border-[#E9ECEE] border-1'}
      />
      <X className="cursor-pointer" />
    </div>
  );
};
