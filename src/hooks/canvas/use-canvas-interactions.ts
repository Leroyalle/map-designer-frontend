'use client';
import {
  drawShapeFirstPoint,
  drawShapeMouseMove,
  handleMove,
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
  const isSpacePressed = useRef(false);
  const startPoint = useRef<Point | null>(null);
  const [isCtrlPressed, setIsCtrlPressed] = useState(false);
  const activeToolRef = useRef<FabricObject | null>(null);
  const lastPosition = useRef<Point | null>(null);
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
    if (e.code === 'ControlLeft' && !isPanning.current) {
      setIsCtrlPressed(true);
    }
  };

  const handleKeyUp = (e: KeyboardEvent) => {
    if (e.code === 'Space') {
      isSpacePressed.current = false;
    }
    if (e.code === 'ControlLeft' && !isPanning.current) {
      setIsCtrlPressed(false);
    }
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
      isCtrlPressed,
      startPoint.current,
      canvas,
    );
  }, [isCtrlPressed]);
  useEffect(() => {
    if (!canvas || !selectedTool || selectedObject) return;

    canvas.on('mouse:down', (e) => {
      if (e.target) return;
      drawShapeFirstPoint(e, selectedTool.type, activeToolRef, startPoint, canvas);
    });

    canvas.on('mouse:move', (e) => {
      if (!activeToolRef.current || !startPoint.current) return;
      const pointer = canvas.getPointer(e.e);
      lastPosition.current = pointer;
      drawShapeMouseMove(
        pointer,
        selectedTool.type,
        activeToolRef.current,
        isCtrlPressed,
        startPoint.current,
        canvas,
      );
    });

    canvas.on('mouse:up', () => {
      if (
        activeToolRef.current?.originX !== 'center' ||
        activeToolRef.current?.originY !== 'center'
      ) {
        activeToolRef.current?.set({
          originX: 'center',
          originY: 'center',
          top:
            activeToolRef.current.top +
            activeToolRef.current.strokeWidth / 2 +
            activeToolRef.current.height / 2,
          left:
            activeToolRef.current.left +
            activeToolRef.current.strokeWidth / 2 +
            activeToolRef.current.width / 2,
        });
      }
      activeToolRef.current = null;
      canvas.selection = true;
      setSelectedObject(null);
      setSelectedTool(null);
    });

    canvas.on('object:rotating', (e) => {
      shapeRotation(e, isCtrlPressed, canvas);
    });

    return () => {
      if (canvas) {
        canvas.off('mouse:down');
        canvas.off('mouse:move');
        canvas.off('mouse:up');
      }
    };
  }, [canvas, selectedTool, isCtrlPressed]);

  const handleMouseDown = (e: MouseEvent) => {
    if (isSpacePressed.current && canvas) {
      isPanning.current = true;
      lastPosition.current = canvas.getPointer(e);
    }
  };

  const handleMouseUp = () => {
    isPanning.current = false;
    lastPosition.current = null;
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isPanning.current && isSpacePressed.current && containerRef.current && canvas) {
      handleMove(e, setCanvasTransform, lastPosition, canvas);
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
