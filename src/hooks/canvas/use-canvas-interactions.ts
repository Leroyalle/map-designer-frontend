'use client';
import { drawShapeFirstPoint, drawShapeMouseMove, handleMove, handleZoom } from '@/lib';
import { useCanvasSlice } from '@/store';

import { useEffect, useRef, useState } from 'react';

export const useCanvasInteractions = (containerRef: React.RefObject<HTMLDivElement | null>) => {
  const { canvas, setSelectedObject } = useCanvasSlice((state) => state);

  const isPanning = useRef(false);
  const isSpacePressed = useRef(false);
  const lastPosition = useRef<{ x: number; y: number } | null>(null);
  const [canvasTransform, setCanvasTransform] = useState({ scale: 1, x: 0, y: 0 });

  const handleWheel = (e: WheelEvent) => {
    e.preventDefault();
    if (containerRef.current) {
      handleZoom(e, containerRef.current, setCanvasTransform);
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.code === 'Space' && !isPanning.current) {
      isSpacePressed.current = true;
    }
  };

  const handleKeyUp = (e: KeyboardEvent) => {
    if (e.code === 'Space') {
      isSpacePressed.current = false;
    }
  };

  useEffect(() => {
    if (!canvas) return;
    canvas.on('mouse:down', (e) => {
      drawShapeFirstPoint(e, 'line', canvas);
    });
    canvas.on('mouse:move', (e) => {
      drawShapeMouseMove(e, 'line', canvas);
    });
  }, [canvas]);

  const handleMouseDown = (e: MouseEvent) => {
    if (isSpacePressed.current) {
      isPanning.current = true;
      lastPosition.current = { x: e.clientX, y: e.clientY };
    }
  };

  const handleMouseUp = () => {
    isPanning.current = false;
    lastPosition.current = null;
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isPanning.current && isSpacePressed.current && containerRef.current) {
      handleMove(e, setCanvasTransform, lastPosition);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    window.addEventListener('wheel', handleWheel, { passive: false });
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      window.removeEventListener('wheel', handleWheel);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return { canvasTransform, setCanvasTransform };
};
