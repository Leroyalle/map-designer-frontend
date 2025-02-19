'use client';
import { Canvas as FabricCanvas, FabricObject, TEvent, TPointerEvent } from 'fabric';
import { useEffect } from 'react';

type FabricEvent = Partial<TEvent<TPointerEvent>> & {
  selected: FabricObject[];
};

export const useCanvasEvents = (
  canvas: FabricCanvas | null,
  setSelectedObject: (object: FabricObject | null) => void,
  setObjects: (objects: FabricObject[]) => void,
) => {
  useEffect(() => {
    if (!canvas) return;
    const handleSelectionCreated = (event: FabricEvent) => {
      setObjects(event.selected);
      setSelectedObject(event.selected[0]);
    };

    const handleSelectionUpdated = (event: FabricEvent) => {
      setObjects(event.selected);
      setSelectedObject(event.selected[0]);
    };

    const handleSelectionCleared = () => {
      setObjects([]);
      setSelectedObject(null);
    };

    canvas.on('selection:created', handleSelectionCreated);
    canvas.on('selection:updated', handleSelectionUpdated);
    canvas.on('selection:cleared', handleSelectionCleared);

    return () => {
      canvas.off('selection:created', handleSelectionCreated);
      canvas.off('selection:updated', handleSelectionUpdated);
      canvas.off('selection:cleared', handleSelectionCleared);
    };
  }, [canvas, setSelectedObject, setObjects]);
};
