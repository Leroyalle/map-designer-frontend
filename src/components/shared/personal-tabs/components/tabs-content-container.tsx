import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  TabsContent,
} from '@/components/ui';
import React from 'react';
import { PlanItem } from './plan-item';

interface Props {
  array: string[];
}

export const TabsContentContainer: React.FC<Props> = ({ array }) => {
  return (
    <>
      <TabsContent value="projects" className="p-5">
        <Card className="border-0 shadow-none">
          <CardContent className="p-0">
            <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
              {array.map((_, index) => (
                <PlanItem key={index} isFirst={index === 0} />
              ))}
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="tariffs" className="p-5">
        <Card className="border-0 shadow-none">
          <CardHeader>
            <CardTitle>Тарифы</CardTitle>
            <CardDescription>Информация о доступных тарифах.</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Здесь будет информация о тарифах.</p>
          </CardContent>
        </Card>
      </TabsContent>
    </>
  );
};
