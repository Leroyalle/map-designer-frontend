import { TabsTrigger } from '@/components/ui';
import { cn } from '@/lib/utils';
import React from 'react';

interface Props {
  value: string;
  className?: string;
}

export const TabTrigger: React.FC<React.PropsWithChildren<Props>> = ({
  className,
  value,
  children,
}) => {
  return (
    <TabsTrigger
      className={cn(
        'px-4 py-2 text-[#C1C1C1] text-lg data-[state=active]:bg-[#E6F7FF] data-[state=active]:text-[#2196F3] data-[state=active]:shadow-none relative rounded-none  rounded-tl-[5px] rounded-tr-[5px]',
        className,
      )}
      value={value}>
      {children}
    </TabsTrigger>
  );
};
