import { cn } from '@/lib';
import { BottomToolsSelector } from './bottom-tools-selector';

interface Props {
  toolList: {
    toolImage?: string;
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
        'bg-[#262626] flex p-5 gap-5 text-background/90 rounded-[10px] select-none',
        className,
      )}>
      {toolList.map((tool, id) => {
        return (
          <div key={id} className="flex items-center">
            {tool.toolColection ? (
              <BottomToolsSelector toolColection={tool.toolColection} />
            ) : (
              <img src={tool.toolImage} alt="" className="cursor-pointer w-6 h-6" />
            )}
          </div>
        );
      })}
    </div>
  );
};
