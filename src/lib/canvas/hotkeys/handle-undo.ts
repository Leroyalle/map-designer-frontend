import { Canvas } from 'fabric';
import { RefObject } from 'react';

export const handleUndo = (
  isSaving: RefObject<boolean>,
  history: RefObject<string[]>,
  redoStack: RefObject<string[]>,
  canvas: Canvas,
) => {
  isSaving.current = true;
  redoStack.current.push(history.current.pop()!);
  const prevState = JSON.parse(history.current[history.current.length - 1]);
  if (prevState) {
    canvas.loadFromJSON(prevState).then(() => {
      canvas.renderAll();
      isSaving.current = false;
    });
  }
};
