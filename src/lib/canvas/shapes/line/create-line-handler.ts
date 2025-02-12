import { lineState } from '@/config';
import { Canvas, TPointerEvent, TPointerEventInfo } from 'fabric';
import { drawLineFirstPoint, drawLineMouseMove, drawLineSecondPoint } from './helpers';

export const createLineHandler = (canvas: Canvas) => {
  const state: lineState = {
    startpoint: { x: 0, y: 0 },
    tempLine: null,
    isCtrlPressed: false,
  };

  let lastMouseEvent: TPointerEventInfo<TPointerEvent> | null = null;

  const handleMouseDown = (e: TPointerEventInfo<TPointerEvent>) => {
    const result = drawLineFirstPoint(e, state, canvas);
    if (result) {
      state.startpoint = result.startpoint;
      state.tempLine = result.tempLine;
    }
  };

  const handleMouseMove = (e: TPointerEventInfo<TPointerEvent>) => {
    lastMouseEvent = e;
    drawLineMouseMove(e, state, canvas);
  };

  const handleMouseUp = (e: TPointerEventInfo<TPointerEvent>) => {
    drawLineSecondPoint(e, state, canvas);
    state.tempLine = null;
  };

  document.addEventListener('keydown', (e) => {
    if (e.ctrlKey) {
      state.isCtrlPressed = true;
      if (state.tempLine && lastMouseEvent) {
        handleMouseMove(lastMouseEvent);
      }
    }
  });

  document.addEventListener('keyup', (e) => {
    if (!e.ctrlKey) {
      state.isCtrlPressed = false;
      if (state.tempLine && lastMouseEvent) {
        handleMouseMove(lastMouseEvent);
      }
    }
  });

  canvas.on('mouse:down', handleMouseDown);
  canvas.on('mouse:up', handleMouseUp);
  canvas.on('mouse:move', handleMouseMove);
};
