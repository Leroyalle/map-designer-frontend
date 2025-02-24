'use client';
import { handleCopy, handleDelete, handlePaste, handleRedo, handleUndo, saveState } from '@/lib';
import { Canvas } from 'fabric';
import { RefObject, useEffect, useRef, useState } from 'react';

export const useKeyboardEvents = (
  activeButtonPressed: RefObject<KeyboardEvent['code'] | null>,
  isPanning: RefObject<boolean>,
  canvas: Canvas | null,
) => {
  const [isCtrlPressed, setIsCtrlPressed] = useState(false);

  const offset = useRef<number>(10);
  const history = useRef<string[]>([]);
  const redoStack = useRef<string[]>([]);
  const isSaving = useRef(false);

  const handleSaveState = () => {
    saveState(isSaving, history, redoStack, canvas);
  };

  useEffect(() => {
    if (!canvas) return;
    canvas.on('object:added', handleSaveState);
    canvas.on('object:modified', handleSaveState);
    canvas.on('object:removed', handleSaveState);
    return () => {
      canvas.off('object:added', handleSaveState);
      canvas.off('object:modified', handleSaveState);
      canvas.off('object:removed', handleSaveState);
    };
  }, [canvas]);

  useEffect(() => {
    if (!canvas) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      activeButtonPressed.current = e.code;

      if (e.code === 'ControlLeft' && !isPanning.current) {
        setIsCtrlPressed(true);
      }

      if (e.code === 'Delete') {
        handleDelete(canvas);
      }

      if (e.code === 'KeyC' && isCtrlPressed) {
        handleCopy(canvas, offset);
      }

      if (e.code === 'KeyV' && isCtrlPressed) {
        handlePaste(canvas, offset);
      }

      if (e.code === 'KeyZ' && isCtrlPressed && !e.shiftKey && history.current.length > 0) {
        handleUndo(isSaving, history, redoStack, canvas);
      }

      if (e.code === 'KeyZ' && e.shiftKey && isCtrlPressed && redoStack.current.length > 0) {
        handleRedo(isSaving, history, redoStack, canvas);
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
