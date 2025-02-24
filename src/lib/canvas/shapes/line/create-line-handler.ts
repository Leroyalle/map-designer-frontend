import { Canvas, TPointerEvent, TPointerEventInfo } from 'fabric';
import { drawShapeMouseMove, drawShapeSecondPoint } from '../draw-shape';

export const createLineHandler = (canvas: Canvas) => {
  let lastMouseEvent: TPointerEventInfo<TPointerEvent> | null = null;

  const handleMouseMove = (e: TPointerEventInfo<TPointerEvent>) => {
    lastMouseEvent = e;
    drawShapeMouseMove(e, state, canvas);
  };

  const handleMouseUp = (e: TPointerEventInfo<TPointerEvent>) => {
    drawShapeSecondPoint(e, state, canvas);
    state.tempShape = null;
  };

  document.addEventListener('keydown', (e) => {
    if (e.ctrlKey) {
      state.isCtrlPressed = true;
      if (state.tempShape && lastMouseEvent) {
        handleMouseMove(lastMouseEvent);
      }
    }
  });

  document.addEventListener('keyup', (e) => {
    if (!e.ctrlKey) {
      state.isCtrlPressed = false;
      if (state.tempShape && lastMouseEvent) {
        handleMouseMove(lastMouseEvent);
      }
    }
  });

  // canvas.on('mouse:down', handleMouseDown);
  canvas.on('mouse:up', handleMouseUp);
  canvas.on('mouse:move', handleMouseMove);
};
