import React from 'react';
import { TabTrigger } from './tab-trigger';
import { Map, RussianRuble } from 'lucide-react';
import { Button, TabsList } from '@/components/ui';

export const TabsHeader: React.FC = () => {
  return (
    <div className="flex justify-between items-center m-5 gap-5 ">
      <div className="flex-1 rounded-[10px] p-3 shadow-md flex ">
        <TabsList className="justify-start h-auto  p-0 bg-transparent ">
          <TabTrigger value="projects" className="mr-4 font-semibold">
            <Map strokeWidth={1.3} size={20} className="mr-3.5 " />
            Мои проекты
          </TabTrigger>
          <TabTrigger value="tariffs">
            <RussianRuble strokeWidth={3} className="w-[18px] h-[19px] mr-3.5" />
            Тарифы
          </TabTrigger>
        </TabsList>
      </div>
      <Button className="text-background  py-8 px-12 text-lg font-extralight rounded-[10px] ">
        <p className="text-3xl mr-1">+</p>
        <p className="font-semibold">Создать проект</p>
      </Button>
    </div>
  );
};
