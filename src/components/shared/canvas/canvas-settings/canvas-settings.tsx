'use client';
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { useCanvasSlice } from '@/store';
import { Input, Slider } from '@heroui/react';
import { useCanvasDimensions } from '@/hooks';
import { ProjectWithItems } from '@/types';

interface Props {
  data: ProjectWithItems;
  className?: string;
}

export const CanvasSettings: React.FC<Props> = ({ data, className }) => {
  const canvas = useCanvasSlice((state) => state.canvas);
  const { dimensions, handleDimensionChange } = useCanvasDimensions(
    data.canvasWidth,
    data.canvasHeight,
  );

  const [imageOpacity, setImageOpacity] = useState<number | number[]>(100);

  useEffect(() => {
    if (canvas) {
      canvas.forEachObject((object) => {
        if (object.name === 'background') {
          object.set('opacity', Number(imageOpacity) / 100);
        }
      });
      canvas.renderAll();
    }
  }, [imageOpacity, canvas]);

  if (!canvas) {
    return null;
  }

  return (
    <div
      className={cn('flex bg-[#262626] text-white p-3 rounded-[10px] flex-col gap-y-3', className)}>
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
      <Slider
        label={'Прозрачность фото'}
        size="sm"
        maxValue={100}
        step={1}
        defaultValue={imageOpacity}
        value={imageOpacity}
        onChange={(value) => setImageOpacity(value)}
      />
    </div>
  );
};
