'use client';
import { continuePan, handleCanvasZoom, startPan } from '@/lib';
import {
  Canvas as FabricCanvas,
  FabricObject,
  Point,
  TEvent,
  TPointerEvent,
  TPointerEventInfo,
} from 'fabric';
import { useEffect, useRef } from 'react';

type FabricEvent = Partial<TEvent<TPointerEvent>> & {
  selected: FabricObject[];
};

export const useCanvasEvents = (
  canvas: FabricCanvas | null,
  setSelectedObject: (object: FabricObject | null) => void,

  isViewMode?: boolean,
) => {
  const isSpacePressed = useRef(false);
  const lastPoint = useRef<Point | null>(null);
  const isPanning = useRef(false);

  useEffect(() => {
    if (!canvas) return;
    const handleSelectionCreated = (event: FabricEvent) => {
      setSelectedObject(event.selected[0]);
    };

    const handleSelectionUpdated = (event: FabricEvent) => {
      setSelectedObject(event.selected[0]);
    };

    const handleSelectionCleared = () => {
      setSelectedObject(null);
    };

    const handleMouseWheel = (event: TPointerEventInfo<WheelEvent>) => {
      handleCanvasZoom(event, canvas);
    };

    const handleStartPan = (event: TPointerEventInfo<MouseEvent>) => {
      startPan(event, isSpacePressed, isPanning, lastPoint);
    };

    const handleContinuePan = (event: TPointerEventInfo<MouseEvent>) => {
      continuePan(event, isPanning, lastPoint, canvas);
    };

    const stopPan = () => {
      isPanning.current = false;
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === 'Space') {
        isSpacePressed.current = true;
      }
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      if (event.code === 'Space') {
        isSpacePressed.current = false;
        if (isPanning.current) {
          stopPan();
        }
      }
    };

    if (isViewMode) {
      canvas.on('mouse:wheel', handleMouseWheel);
      canvas.on('mouse:down', handleStartPan);
      canvas.on('mouse:move', handleContinuePan);
      canvas.on('mouse:up', stopPan);
      window.addEventListener('keydown', handleKeyDown);
      window.addEventListener('keyup', handleKeyUp);
    } else {
      canvas.on('selection:created', handleSelectionCreated);
      canvas.on('selection:updated', handleSelectionUpdated);
      canvas.on('selection:cleared', handleSelectionCleared);
    }

    return () => {
      if (isViewMode) {
        canvas.off('mouse:wheel', handleMouseWheel);
        canvas.off('mouse:down', handleStartPan);
        canvas.off('mouse:move', handleContinuePan);
        canvas.off('mouse:up', stopPan);
        window.removeEventListener('keydown', handleKeyDown);
        window.removeEventListener('keyup', handleKeyUp);
      } else {
        canvas.off('selection:created', handleSelectionCreated);
        canvas.off('selection:updated', handleSelectionUpdated);
        canvas.off('selection:cleared', handleSelectionCleared);
      }
    };
  }, [canvas, setSelectedObject]);
};
