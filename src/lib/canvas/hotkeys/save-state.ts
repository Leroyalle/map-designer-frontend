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
        console.log('this', this);
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
  console.log('canvas before save last obj', canvas._objects[canvas._objects.length - 1]);
  const currentState = JSON.stringify(canvas.toJSON());
  console.log('history before', history.current);
  console.log('canvas save all objs', canvas._objects);
  if (history.current.length === 0 || history.current[history.current.length - 1] != currentState) {
    history.current = [...history.current, currentState];
    console.log('history after', history.current);

    redoStack.current = [];
  }
};
