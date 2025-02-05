import React from 'react';
import { ContentHeader, TabContent, TabsHeader } from './components';
import { Tabs } from '@/components/ui';

export const PersonalTabs: React.FC = () => {
  const array = [...Array(5)];

  return (
    <Tabs defaultValue="projects" className="w-full">
      <TabsHeader />

      <div className="mx-5 bg-white shadow-md rounded-[10px]">
        <ContentHeader title="Созданные" />

        <TabContent array={array} />
      </div>
    </Tabs>
  );
};
