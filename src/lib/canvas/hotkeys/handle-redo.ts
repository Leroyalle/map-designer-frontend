import { Canvas } from 'fabric';
import { RefObject } from 'react';

export const handleRedo = (
  isSaving: RefObject<boolean>,
  history: RefObject<string[]>,
  redoStack: RefObject<string[]>,
  canvas: Canvas,
) => {
  isSaving.current = true;

  const nextState = JSON.parse(redoStack.current[redoStack.current.length - 1]);

  if (nextState) {
    canvas.loadFromJSON(nextState).then(() => {
      console.log('nextState', nextState);
      console.log('canvas', canvas);

      canvas.renderAll();
      isSaving.current = false;
    });
    const currentState = history.current.pop() as string;
    history.current = [...history.current, currentState];
  }
};
