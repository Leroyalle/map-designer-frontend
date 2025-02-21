'use client';
import { handleCopy, handleDelete, handlePaste } from '@/lib';
import { Canvas } from 'fabric';
import { RefObject, useEffect, useRef, useState } from 'react';

export const useKeyboardEvents = (
  activeButtonPressed: RefObject<KeyboardEvent['code'] | null>,
  isPanning: RefObject<boolean>,
  canvas: Canvas | null,
) => {
  const [isCtrlPressed, setIsCtrlPressed] = useState(false);
  const offset = useRef<number>(10);
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!canvas) return;
      activeButtonPressed.current = e.code;
      if (e.code === 'ControlLeft' && !isPanning.current) {
        setIsCtrlPressed(true);
      }
      if (e.code === 'Delete') {
        handleDelete(canvas);
      }

      if (e.code === 'KeyC' && isCtrlPressed && canvas) {
        handleCopy(canvas, offset);
      }

      if (e.code === 'KeyV' && isCtrlPressed && canvas) {
        handlePaste(canvas, offset);
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.code === 'ControlLeft') {
        setIsCtrlPressed(false);
      }
      activeButtonPressed.current = null;
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [canvas, isCtrlPressed, isPanning, activeButtonPressed]);

  return { isCtrlPressed };
};
