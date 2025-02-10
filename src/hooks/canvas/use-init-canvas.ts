import { useEffect } from 'react';
import { Canvas as FabricCanvas } from 'fabric';
import { useCanvasSlice } from '@/store';

export const useInitCanvas = (canvasRef: React.RefObject<HTMLCanvasElement | null>) => {
  const setCanvas = useCanvasSlice((state) => state.setCanvas);

  useEffect(() => {
    if (!canvasRef.current) return;
    const initCanvas = new FabricCanvas(canvasRef.current, {
      width: 1000,
      height: 500,
    });
    initCanvas.backgroundColor = 'white';
    initCanvas.renderAll();
    setCanvas(initCanvas);

    return () => {
      initCanvas.dispose();
    };
  }, [canvasRef, setCanvas]);
};
