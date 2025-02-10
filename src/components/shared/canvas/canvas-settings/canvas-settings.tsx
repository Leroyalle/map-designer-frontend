import React from 'react';
import { cn } from '@/lib/utils';
import { useCanvasSlice } from '@/store';
import { Input } from '@heroui/react';
import { useCanvasDimensions } from '@/hooks';

interface Props {
  className?: string;
}

export const CanvasSettings: React.FC<Props> = ({ className }) => {
  const canvas = useCanvasSlice((state) => state.canvas);
  const { dimensions, handleDimensionChange } = useCanvasDimensions();

  if (!canvas) {
    return null;
  }

  return (
    <div className={cn('flex bg-[#262626] p-3 rounded-[10px] flex-col gap-y-3', className)}>
      <Input
        label="Ширина"
        value={dimensions.width.toString()}
        onChange={handleDimensionChange('width')}
        type="number"
        min="1"
      />
      <Input
        label="Высота"
        value={dimensions.height.toString()}
        onChange={handleDimensionChange('height')}
        type="number"
        min="1"
      />
    </div>
  );
};
