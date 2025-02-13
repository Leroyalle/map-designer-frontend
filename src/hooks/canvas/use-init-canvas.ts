'use client';
import { useEffect } from 'react';
import { Canvas as FabricCanvas } from 'fabric';
import { useCanvasSlice } from '@/store';
import { ProjectWithItems } from '@/types';
import { renderItemsOnCanvas } from '@/lib';

export const useInitCanvas = (
  canvasRef: React.RefObject<HTMLCanvasElement | null>,
  data: ProjectWithItems,
) => {
  const setCanvas = useCanvasSlice((state) => state.setCanvas);

  useEffect(() => {
    if (!canvasRef.current) return;
    const initCanvas = new FabricCanvas(canvasRef.current, {
      width: data.canvasWidth,
      height: data.canvasHeight,
    });
    initCanvas.backgroundColor = 'white';
    initCanvas.renderAll();
    renderItemsOnCanvas(initCanvas, data.items);
    setCanvas(initCanvas);

    return () => {
      initCanvas.dispose();
    };
  }, [canvasRef, setCanvas]);
};
