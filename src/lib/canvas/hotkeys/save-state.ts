import { Canvas, FabricObject } from 'fabric';
import { RefObject } from 'react';

export const saveState = (
  isSaving: RefObject<boolean>,
  history: RefObject<string[]>,
  redoStack: RefObject<string[]>,
  canvas: Canvas | null,
) => {
  if (!canvas || isSaving.current) return;
  canvas.forEachObject((obj) => {
    obj.toObject = ((toObject) =>
      function (this: FabricObject) {
        return {
          ...toObject.call(this),
          selectable: this.selectable,
          evented: this.evented,
          name: this.name,
          opacity: this.opacity,
          angle: this.angle,
          width: this.getScaledWidth() - this.strokeWidth,
          height: this.getScaledHeight() - this.strokeWidth,
          left: this.left,
          top: this.top,
        };
      })(obj.toObject);
  });

  const currentState = JSON.stringify(canvas.toJSON());

  if (history.current.length === 0 || history.current[history.current.length - 1] != currentState) {
    history.current = [...history.current, currentState];

    redoStack.current = [];
  }
};
