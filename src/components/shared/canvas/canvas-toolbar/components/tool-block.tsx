import React from 'react';
import { ToolVariant } from './tool-variant';
import { cn } from '@/lib';

interface Props {
  title: string;
  tools: {
    toolName: string;
    image: string;
  }[];
  className?: string;
}

export const ToolBlock: React.FC<Props> = ({ title, tools, className }) => {
  return (
    <div className={cn('bg-[#262626] text-background/90 rounded-[10px] min-w-60 h-fit', className)}>
      <div className="text-background/50 p-5 ">{title}</div>
      <hr className="border-background/20" />
      <div className="p-5 flex flex-col gap-4">
        {tools.map((tool, id) => (
          <ToolVariant key={id} image={tool.image} toolName={tool.toolName} />
        ))}
      </div>
    </div>
  );
};
