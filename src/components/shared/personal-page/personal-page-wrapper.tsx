'use client';
import React from 'react';
import { TabsContentContainer, TabsHeader } from './components';
import { Tabs } from '@/components/ui';
import { CreateMapPopup } from '../modals';

export const PersonalPageWrapper: React.FC = () => {
  return (
    <Tabs defaultValue="projects" className="w-full">
      <TabsHeader />
      <div className="mx-5 bg-background shadow-md rounded-[10px]">
        <TabsContentContainer />
        <CreateMapPopup />
      </div>
    </Tabs>
  );
};
