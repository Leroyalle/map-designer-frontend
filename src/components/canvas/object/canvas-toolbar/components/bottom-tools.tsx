import { Select, SelectContent, SelectItem, SelectTrigger } from '@/components/ui';
import { cn } from '@/lib';
import React from 'react';

interface Props {
  toolList: {
    toolImage: string;
    toolColection?: {
      toolImage: string;
    }[];
  }[];
  className?: string;
}

export const BottomTools: React.FC<Props> = ({ toolList, className }) => {
  return (
    <div
      className={cn(
        'bg-[#262626] flex p-5 gap-6 text-background/90 rounded-[10px] select-none',
        className,
      )}>
      {toolList.map((tool, id) => (
        <div key={id} className="flex">
          {tool.toolColection ? (
            <Select>
              <SelectTrigger className="focus:ring-0 border-0">
                <img src={tool.toolImage} alt="tool image" />
              </SelectTrigger>
              <SelectContent className="bg-[#262626]">
                {tool.toolColection.map((collectionItem, id) => (
                  <SelectItem
                    key={id}
                    value={collectionItem.toolImage}
                    className="focus:bg-[#535353] text-background focus:text-background">
                    <img
                      src={collectionItem.toolImage}
                      alt="tool image"
                      className="cursor-pointer"
                    />
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          ) : (
            <img src={tool.toolImage} alt="tool image" className="cursor-pointer" />
          )}
        </div>
      ))}
    </div>
  );
};
