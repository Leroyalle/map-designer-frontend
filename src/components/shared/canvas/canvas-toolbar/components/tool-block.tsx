'use client';
import React from 'react';
import { ToolVariant } from './tool-variant';
import { cn } from '@/lib';
import { ToolConfig } from '@/config/tools';
import { useCanvasSlice } from '@/store';

interface Props {
  title: string;
  tools: ToolConfig[];
  className?: string;
}

export const ToolBlock: React.FC<Props> = ({ title, tools, className }) => {
  const { selectedTool, canvas, setSelectedTool } = useCanvasSlice((state) => state);

  const handleToolClick = (tool: ToolConfig) => {
    if (!canvas) return;
    setSelectedTool(tool);
    // canvas.selection = false;
    // if (!canvas) return;
    // tool.createHandler(canvas);
    // canvas.requestRenderAll();
  };

  return (
    <div className={cn('bg-[#262626] text-background/90 rounded-[10px] min-w-60 h-fit', className)}>
      <div className="text-background/50 p-3 text-sm">{title}</div>
      <hr className="border-background/20" />
      <div className="flex flex-col py-4">
        {tools.map((tool, id) => (
          <ToolVariant
            key={id}
            image={tool.image}
            toolName={tool.name}
            className={selectedTool && selectedTool.type === tool.type ? 'bg-background/15' : ''}
            onClick={() => handleToolClick(tool)}
          />
        ))}
      </div>
    </div>
  );
};
