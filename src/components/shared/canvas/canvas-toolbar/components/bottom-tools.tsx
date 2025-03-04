import { cn } from '@/lib';
import { BottomToolsSelector } from './bottom-tools-selector';
import { ToolConfig } from '@/config';
import { useCanvasSlice } from '@/store';

interface Props {
  toolList: ToolConfig[];
  className?: string;
}

export const BottomTools: React.FC<Props> = ({ toolList, className }) => {
  const selectedTool = useCanvasSlice((state) => state.selectedTool);

  return (
    <div
      className={cn('bg-[#262626] flex text-background/90 rounded-[10px] select-none', className)}>
      {toolList.map((tool, id) => {
        return (
          <div
            key={id}
            className={cn(
              'flex cursor-pointer items-center hover:bg-background/15 h-14 m-2 rounded-[10px]',
              tool.toolColection &&
                selectedTool &&
                tool.toolColection.some((item) => item.type === selectedTool.type) &&
                'bg-background/15',
            )}>
            {tool.toolColection ? (
              <BottomToolsSelector toolColection={tool.toolColection} />
            ) : (
              <img src={tool.image} alt="" className="w-6 h-6 mx-3" />
            )}
          </div>
        );
      })}
    </div>
  );
};
