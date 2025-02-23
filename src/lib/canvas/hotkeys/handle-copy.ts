import { copyTextToClipboard } from '@/lib';
import { Canvas } from 'fabric';
import { RefObject } from 'react';

export const handleCopy = (canvas: Canvas, offset: RefObject<number>) => {
  offset.current = 10;
  const activeObjects = canvas.getActiveObjects();
  if (activeObjects.length === 0) return;
  if (activeObjects.length > 0) {
    const jsonString = JSON.stringify(
      activeObjects.map((obj) => {
        const { left, top } = obj.getBoundingRect();
        return {
          ...obj.toObject(),
          left,
          top,
        };
      }),
    );
    copyTextToClipboard(jsonString);
  }
};
