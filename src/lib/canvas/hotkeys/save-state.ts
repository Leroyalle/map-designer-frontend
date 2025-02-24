import { Canvas } from 'fabric';
import { RefObject } from 'react';

export const saveState = (
  isSaving: RefObject<boolean>,
  history: RefObject<string[]>,
  redoStack: RefObject<string[]>,
  canvas: Canvas | null,
) => {
  if (!canvas || isSaving.current) return;
  const currentState = JSON.stringify(canvas.toJSON());
  if (
    history.current.length === 0 ||
    history.current[history.current.length - 1] !== currentState
  ) {
    history.current.push(currentState);
    redoStack.current = [];
  }
};
