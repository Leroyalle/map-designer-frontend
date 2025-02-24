'use client';
import { drawShapeMouseMove } from '@/lib';
import { useCanvasSlice } from '@/store';
import { FabricObject, Point } from 'fabric';

import { useEffect, useRef, useState } from 'react';
import { useKeyboardEvents } from './use-keyboard-events';
import { useFabricEvents } from './use-fabric-events';
import { useMouseEvents } from './use-mouse-events';

export const useCanvasInteractions = (containerRef: React.RefObject<HTMLDivElement | null>) => {
  const { canvas, selectedTool, selectedObject, setSelectedObject, setSelectedTool } =
    useCanvasSlice((state) => state);
  const isPanning = useRef(false);
  const activeButtonPressed = useRef<KeyboardEvent['code'] | null>(null);
  const startPoint = useRef<Point | null>(null);
  const activeToolRef = useRef<FabricObject | null>(null);
  const lastPosition = useRef<{ x: number; y: number } | null>(null);
  const [canvasTransform, setCanvasTransform] = useState({ scale: 1, x: 0, y: 0 });

  useKeyboardEvents(activeButtonPressed, isPanning, canvas);
  useFabricEvents(
    canvas,
    selectedTool,
    selectedObject,
    activeToolRef,
    startPoint,
    lastPosition,
    activeButtonPressed,
    setSelectedObject,
    setSelectedTool,
  );

  useEffect(() => {
    if (
      !lastPosition.current ||
      !startPoint.current ||
      !selectedTool ||
      !activeToolRef.current ||
      !canvas
    )
      return;
    drawShapeMouseMove(
      lastPosition.current,
      selectedTool.type,
      activeToolRef.current,
      activeButtonPressed.current === 'ControlLeft',
      startPoint.current,
      canvas,
    );
  }, [activeButtonPressed.current, selectedObject]);

  useMouseEvents(
    canvas,
    containerRef,
    setCanvasTransform,
    isPanning,
    lastPosition,
    activeButtonPressed,
  );

  return { canvasTransform, setCanvasTransform };
};
