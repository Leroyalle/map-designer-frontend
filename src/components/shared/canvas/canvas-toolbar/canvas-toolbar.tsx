import React from 'react';
import { BottomTools } from './components';
import { cn } from '@/lib';
import { CONTROL_TOOLS, HISTORY_TOOLS, MAIN_TOOL_LIST } from '@/config';

interface Props {
  className?: string;
}

export const CanvasToolbar: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn('flex gap-3 items-center', className)}>
      <BottomTools toolList={CONTROL_TOOLS} />
      <BottomTools toolList={MAIN_TOOL_LIST} />
      <BottomTools toolList={HISTORY_TOOLS} />
    </div>
  );
};
