import React from 'react';
import { ContentHeader, TabsContentContainer, TabsHeader } from './components';
import { Tabs } from '@/components/ui';
import { CreateMapPopup } from '../create-map-popup';

export const PersonalTabs: React.FC = () => {
  const array = [...Array(5)];

  return (
    <Tabs defaultValue="projects" className="w-full">
      <TabsHeader />

      <div className="mx-5 bg-background shadow-md rounded-[10px]">
        <ContentHeader title="Созданные" />

        <TabsContentContainer array={array} />
        <CreateMapPopup />
      </div>
    </Tabs>
  );
};
