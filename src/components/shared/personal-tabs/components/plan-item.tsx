import { cn } from '@/lib/utils';
import { Plus } from 'lucide-react';
import React from 'react';

interface Props {
  isFirst: boolean;
}

export const PlanItem: React.FC<Props> = ({ isFirst }) => {
  return (
    <div
      className={cn(
        'bg-[#FAFAFA] border-[1px] border-[#eee9e9] rounded-[10px] h-40 ',
        isFirst && 'flex flex-col items-center justify-center cursor-pointer transition-colors',
      )}>
      {isFirst && (
        <>
          <Plus size={26} className="text-[#C1C1C1] mb-2" />
          <span className="text-[#C1C1C1] font-medium">Новая карта</span>
        </>
      )}
      {/* Пустой блок */}
    </div>
  );
};
