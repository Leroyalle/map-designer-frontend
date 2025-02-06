import { cn } from '@/lib';
import { Search, X } from 'lucide-react';

interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClear: () => void;
  className?: string;
}

export const FilteredInput: React.FC<Props> = ({ value, onClear, onChange, className }) => {
  return (
    <div
      className={cn(
        'bg-[#FAFAFA] p-5 rounded-[10px] flex items-center gap-3 text-background/40 relative',
        className,
      )}>
      <Search size={22} className="text-[#878787]" />
      <input
        value={value}
        onChange={onChange}
        placeholder="Поиск..."
        className="placeholder:text-[#878787] placeholder:font-medium placeholder:tracking-wide bg-inherit outline-0 w-[210px] text-foreground font-medium "
      />
      {value !== '' && (
        <X onClick={onClear} className="absolute right-5 text-foreground cursor-pointer" />
      )}
    </div>
  );
};
