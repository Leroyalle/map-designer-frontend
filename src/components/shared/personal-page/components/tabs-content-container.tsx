import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  TabsContent,
  Typography,
} from '@/components/ui';
import React from 'react';
import { ContentHeader } from './content-header';
import { MapsList } from './maps-list';

interface Props {
  projects: string[];
}

export const TabsContentContainer: React.FC<Props> = ({ projects }) => {
  return (
    <>
      <TabsContent value="projects" className="p-5">
        <ContentHeader title="Созданные" />
        <hr className="my-5" />
        <MapsList items={projects} />
      </TabsContent>
      <TabsContent value="tariffs" className="p-5">
        <Card className="border-0 shadow-none">
          <CardHeader>
            <CardTitle>Тарифы</CardTitle>
            <CardDescription>Информация о доступных тарифах.</CardDescription>
          </CardHeader>
          <CardContent>
            <Typography>Здесь будет информация о тарифах.</Typography>
          </CardContent>
        </Card>
      </TabsContent>
    </>
  );
};
