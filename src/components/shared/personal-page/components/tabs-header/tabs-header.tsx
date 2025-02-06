import React from 'react';
import { TabTrigger } from '../tab-trigger';
import { Map, RussianRuble } from 'lucide-react';
import { TabsList } from '@/components/ui';
import { cn } from '@/lib/utils';
import { CreateNewProjectButton } from './create-new-project-button';

interface Props {
  className?: string;
}

export const TabsHeader: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn('flex justify-between items-center m-5 gap-5', className)}>
      <div className="flex-1 rounded-[10px] p-3 shadow-md flex">
        <TabsList className="justify-start h-auto p-0 bg-transparent ">
          <TabTrigger value="projects" className="mr-4">
            <Map strokeWidth={1.3} size={20} className="mr-3.5" />
            Мои проекты
          </TabTrigger>
          <TabTrigger value="tariffs">
            <RussianRuble strokeWidth={3} className="w-[18px] h-[19px] mr-3.5" />
            Тарифы
          </TabTrigger>
        </TabsList>
      </div>
      <CreateNewProjectButton />
    </div>
  );
};
