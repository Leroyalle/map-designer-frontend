import { Canvas } from 'fabric';
import { RefObject } from 'react';

export const handleRedo = (
  isSaving: RefObject<boolean>,
  history: RefObject<string[]>,
  redoStack: RefObject<string[]>,
  canvas: Canvas,
) => {
  isSaving.current = true;
  const nextState = JSON.parse(redoStack.current.pop()!);
  history.current.push(nextState);
  canvas.loadFromJSON(nextState).then(() => {
    canvas.renderAll();
    isSaving.current = false;
  });
};
