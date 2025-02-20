'use client';
import { RefObject, useEffect } from 'react';
import { Canvas as FabricCanvas } from 'fabric';
import { useCanvasSlice } from '@/store';
import { ProjectWithItems } from '@/types';
import { renderItemsOnCanvas } from '@/lib';

export const useInitCanvasView = (
  canvasRef: RefObject<HTMLCanvasElement | null>,
  data: ProjectWithItems,
) => {
  const { setCanvas } = useCanvasSlice();

  useEffect(() => {
    if (canvasRef.current) {
      const initCanvas = new FabricCanvas(canvasRef.current, {
        width: data.canvasWidth,
        height: data.canvasHeight,
      });
      initCanvas.backgroundColor = 'white';
      initCanvas.selection = false;
      initCanvas.defaultCursor = 'default';
      initCanvas.hoverCursor = 'default';
      initCanvas.on('object:added', (e) => {
        e.target.set({
          selectable: false,
          evented: false,
        });
      });
      initCanvas.renderAll();
      renderItemsOnCanvas(initCanvas, data.items);
      setCanvas(initCanvas);

      return () => {
        initCanvas.dispose();
      };
    }
  }, [canvasRef, setCanvas]);
};
