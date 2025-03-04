'use client';
import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger } from '@/components/ui';
import { ToolConfig } from '@/config';
import { ToolVariant } from './tool-variant';
import { useCanvasSlice } from '@/store';
import { cn } from '@/lib';

interface Props {
  toolColection: ToolConfig[];
}

export const BottomToolsSelector: React.FC<Props> = ({ toolColection }) => {
  const { selectedTool, setSelectedTool } = useCanvasSlice((state) => state);

  const handleToolClick = (image: string) => {
    const selectedTool = toolColection.find((tool) => tool.image === image);
    if (!selectedTool) return;
    setSelectedTool(selectedTool);
  };

  return (
    <Select value={selectedTool?.image || ''} onValueChange={handleToolClick}>
      <SelectTrigger className={cn('focus:ring-0 border-0')}>
        <img
          src={
            selectedTool && toolColection.some((item) => item.type === selectedTool.type)
              ? selectedTool.image
              : toolColection[0].image
          }
          alt="tool image"
          className="cursor-pointer w-6 h-6"
        />
      </SelectTrigger>
      <SelectContent className="bg-[#262626]">
        {toolColection.map((collectionItem, id) => (
          <SelectItem
            key={id}
            value={collectionItem.image || ''}
            className={cn(
              `focus:bg-[#535353] text-background focus:text-background cursor-pointer`,
              selectedTool && selectedTool.type === collectionItem.type ? 'bg-background/15' : '',
            )}>
            <ToolVariant
              key={id}
              image={collectionItem.image || ''}
              toolName={collectionItem.name || ''}
            />
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
