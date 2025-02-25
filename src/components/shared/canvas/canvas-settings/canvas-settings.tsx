'use client';
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { useCanvasSlice } from '@/store';
import { Slider } from '@heroui/react';

interface Props {
  className?: string;
}

export const CanvasSettings: React.FC<Props> = ({ className }) => {
  const canvas = useCanvasSlice((state) => state.canvas);

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
      <Slider
        label={'Прозрачность фото'}
        size="sm"
        maxValue={100}
        step={1}
        defaultValue={imageOpacity}
        value={imageOpacity}
        hideValue
        onChange={(value) => setImageOpacity(value)}
      />
    </div>
  );
};
