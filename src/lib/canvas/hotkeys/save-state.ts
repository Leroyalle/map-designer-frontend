import { Canvas, FabricObject } from 'fabric';
import { RefObject } from 'react';

export const saveState = (
  isSaving: RefObject<boolean>,
  history: RefObject<string[]>,
  redoStack: RefObject<string[]>,
  canvas: Canvas | null,
) => {
  if (!canvas || isSaving.current) return;
  canvas.getObjects().forEach((obj) => {
    obj.toObject = ((toObject) =>
      function (this: FabricObject) {
        return {
          ...toObject.call(this),
          selectable: this.selectable,
          evented: this.evented,
          name: this.name,
          opacity: this.opacity,
          angle: this.angle,
          left: this.left,
          top: this.top,
        };
      })(obj.toObject);
  });
  console.log('canvas befot ew save', canvas._objects[canvas._objects.length - 1]);
  const currentState = JSON.stringify(canvas.toJSON());
  console.log('history before', history.current);
  console.log(canvas._objects);
  if (history.current.length === 0 || history.current[history.current.length - 1] != currentState) {
    history.current = [...history.current, currentState];
    console.log('history after', history.current);

    redoStack.current = [];
  }
};
