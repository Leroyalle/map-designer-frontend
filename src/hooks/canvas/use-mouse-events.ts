'use client';
import { handleMove, handleZoom } from '@/lib';
import { Canvas } from 'fabric';
import { Dispatch, RefObject, SetStateAction, useEffect } from 'react';

export const useMouseEvents = (
  canvas: Canvas | null,
  containerRef: React.RefObject<HTMLDivElement | null>,
  setCanvasTransform: Dispatch<
    SetStateAction<{
      scale: number;
      x: number;
      y: number;
    }>
  >,
  isPanning: RefObject<boolean>,
  lastPosition: RefObject<{
    x: number;
    y: number;
  } | null>,
  activeButtonPressed: RefObject<string | null>,
) => {
  const handleWheel = (e: WheelEvent) => {
    e.preventDefault();
    if (containerRef.current) {
      handleZoom(e, containerRef.current, setCanvasTransform);
    }
  };

  const handleMouseUp = () => {
    if (!canvas) return;
    isPanning.current = false;
    canvas.selection = true;
    lastPosition.current = null;
  };

  const handleMouseDown = (e: MouseEvent) => {
    if (canvas && activeButtonPressed.current === 'Space') {
      isPanning.current = true;
      canvas.selection = false;
      lastPosition.current = { x: e.x, y: e.y };
    }
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isPanning.current && containerRef.current && activeButtonPressed.current === 'Space') {
      handleMove(e, setCanvasTransform, lastPosition);
    }
  };

  useEffect(() => {
    window.addEventListener('wheel', handleWheel, { passive: false });
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('wheel', handleWheel);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [canvas]);
};
