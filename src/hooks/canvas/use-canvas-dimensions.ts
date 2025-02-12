'use client';
import { useCanvasSlice } from '@/store';
import { useCallback, useEffect, useState } from 'react';

export const useCanvasDimensions = (canvasWidth: number, canvasHeight: number) => {
  const canvas = useCanvasSlice((state) => state.canvas);
  const [dimensions, setDimensions] = useState({
    width: canvas?.getWidth() || canvasWidth,
    height: canvas?.getHeight() || canvasHeight,
  });

  const handleDimensionChange = useCallback(
    (type: 'width' | 'height') => (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value.replace(/\D/g, '');
      const intValue = Math.max(1, parseInt(value, 10) || 0);
      setDimensions((prev) => ({ ...prev, [type]: intValue }));
    },
    [],
  );

  useEffect(() => {
    if (canvas) {
      canvas.setDimensions(dimensions);
    }
  }, [canvas, dimensions]);

  return { dimensions, handleDimensionChange };
};
