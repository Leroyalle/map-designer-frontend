import { Canvas } from 'fabric';
import { RefObject } from 'react';

export const handleUndo = (
  isSaving: RefObject<boolean>,
  history: RefObject<string[]>,
  redoStack: RefObject<string[]>,
  canvas: Canvas,
) => {
  if (history.current.length <= 1) return;
  isSaving.current = true;

  const currentState = history.current.pop() as string;
  redoStack.current = [...redoStack.current, currentState];
  const prevState = JSON.parse(history.current[history.current.length - 1]);

  if (prevState) {
    canvas.loadFromJSON(prevState).then(() => {
      console.log('prevState', prevState);
      console.log('canvas after', canvas._objects);
      canvas.renderAll();
      isSaving.current = false;
    });
  }
};
