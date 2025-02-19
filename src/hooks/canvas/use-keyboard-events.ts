'use client';

import { useCanvasSlice } from '@/store';
import { Canvas } from 'fabric';
import { RefObject, useEffect, useState } from 'react';

export const useKeyboardEvents = (
  activeButtonPressed: RefObject<KeyboardEvent['code'] | null>,
  isPanning: RefObject<boolean>,
  canvas: Canvas | null,
) => {
  const { objects, selectedObject, setSelectedObject } = useCanvasSlice((state) => state);
  const [isCtrlPressed, setIsCtrlPressed] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      console.log(objects);

      activeButtonPressed.current = e.code;
      if (e.code === 'ControlLeft' && !isPanning.current) {
        setIsCtrlPressed(true);
      }
      if (e.code === 'Delete' && selectedObject && canvas) {
        console.log('Deleting:', selectedObject);
        canvas.remove(selectedObject);
        setSelectedObject(null);
      }
    };

    const handleKeyUp = () => {
      setIsCtrlPressed(false);
      activeButtonPressed.current = null;
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [selectedObject, canvas]);

  return { isCtrlPressed };
};
