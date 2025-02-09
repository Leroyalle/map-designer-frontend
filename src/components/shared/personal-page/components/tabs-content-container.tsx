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
import { cn } from '@/lib';
import { ProjectsTab } from './tabs';

interface Props {
  className?: string;
}

export const TabsContentContainer: React.FC<Props> = ({ className }) => {
  return (
    <>
      <TabsContent value="projects" className={cn('p-5', className)}>
        <ContentHeader title="Созданные" />
        <hr className="my-5" />
        <ProjectsTab />
      </TabsContent>
      <TabsContent value="tariffs" className={cn('p-5', className)}>
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
