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
        'bg-[#262626] flex p-5 gap-6 text-background/90 rounded-[10px] select-none',
        className,
      )}>
      {toolList.map((tool, id) => {
        return (
          <div key={id} className="flex">
            {tool.toolColection ? (
              <BottomToolsSelector toolColection={tool.toolColection} />
            ) : (
              <img src={tool.toolImage} alt="tool image" className="cursor-pointer" />
            )}
          </div>
        );
      })}
    </div>
  );
};
