import { Canvas } from 'fabric';
import { RefObject } from 'react';

export const handleUndo = (
  isSaving: RefObject<boolean>,
  history: RefObject<string[]>,
  redoStack: RefObject<string[]>,
  canvas: Canvas,
) => {
  isSaving.current = true;

  const prevState = JSON.parse(history.current[history.current.length - 1]);
  const currentState = history.current.pop() as string;
  redoStack.current = [...redoStack.current, currentState];

  if (prevState) {
    canvas.loadFromJSON(prevState).then(() => {
      console.log('prevState', prevState);
      console.log('canvas after', canvas);
      canvas.renderAll();
      isSaving.current = false;
    });
  }
};
