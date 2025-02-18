'use client';
import {
  drawShapeMouseMove,
  handleMove,
  handleMoveDrawShape,
  handleStartDrawShape,
  handleStopDrawShape,
  handleZoom,
  shapeRotation,
} from '@/lib';
import { useCanvasSlice } from '@/store';
import { FabricObject, Point } from 'fabric';

import { useEffect, useRef, useState } from 'react';

export const useCanvasInteractions = (containerRef: React.RefObject<HTMLDivElement | null>) => {
  const { canvas, selectedTool, selectedObject, setSelectedObject, setSelectedTool } =
    useCanvasSlice((state) => state);
  const isPanning = useRef(false);
  const activeButtonPressed = useRef<KeyboardEvent['code'] | null>(null);
  const startPoint = useRef<Point | null>(null);
  const [isCtrlPressed, setIsCtrlPressed] = useState(false);
  const activeToolRef = useRef<FabricObject | null>(null);
  const lastPosition = useRef<{ x: number; y: number } | null>(null);
  const [canvasTransform, setCanvasTransform] = useState({ scale: 1, x: 0, y: 0 });

  const handleWheel = (e: WheelEvent) => {
    e.preventDefault();
    if (containerRef.current) {
      handleZoom(e, containerRef.current, setCanvasTransform);
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    activeButtonPressed.current = e.code;
    if (e.code === 'ControlLeft' && !isPanning.current) {
      setIsCtrlPressed(true);
    }
  };

  const handleKeyUp = () => {
    setIsCtrlPressed(false);
    activeButtonPressed.current = null;
  };

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
  }, [isCtrlPressed]);

  const handleMouseUp = () => {
    if (!canvas) return;
    isPanning.current = false;
    canvas.selection = true;
    lastPosition.current = null;
  };

  useEffect(() => {
    if (!canvas || !selectedTool || selectedObject) return;

    canvas.on('mouse:down', (e) => {
      handleStartDrawShape(e, canvas, selectedTool, activeToolRef, startPoint);
    });
    canvas.on('mouse:move', (e) => {
      handleMoveDrawShape(
        e,
        canvas,
        selectedTool,
        activeToolRef,
        startPoint,
        lastPosition,
        activeButtonPressed,
      );
    });
    canvas.on('mouse:up', () => {
      handleStopDrawShape(activeToolRef, setSelectedObject, setSelectedTool);
    });
    canvas.on('object:rotating', (e) => {
      shapeRotation(e, activeButtonPressed.current === 'ControlLeft', canvas);
    });

    return () => {
      if (canvas) {
        canvas.off('mouse:down');
        canvas.off('mouse:move');
        canvas.off('mouse:up');
      }
    };
  }, [canvas, selectedTool, activeButtonPressed.current]);

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
  }, [canvas]);

  return { canvasTransform, setCanvasTransform };
};
// src/
// ├── hooks/
// │   ├── useKeyboard.ts
// │   ├── usePanning.ts
// │   └── useCanvasEvents.ts
// ├── lib/
// │   ├── drawShapeMouseMove.ts
// │   ├── handleZoom.ts
// │   └── shapeRotation.ts
// └── components/
//     └── CanvasComponent.tsx
