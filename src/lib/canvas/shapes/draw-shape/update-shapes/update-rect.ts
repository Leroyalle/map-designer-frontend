import { Rect, Point } from 'fabric';

export function updateRect(
  activeTool: Rect,
  deltaX: number,
  deltaY: number,
  pointer: { x: number; y: number },
  startPoint: Point,
  isCtrlPressed: boolean,
) {
  if (!(activeTool instanceof Rect)) return;

  let left = startPoint.x;
  let top = startPoint.y;
  let width = deltaX;
  let height = deltaY;

  if (isCtrlPressed) {
    const size = Math.min(Math.abs(deltaX), Math.abs(deltaY));
    left = deltaX < 0 ? startPoint.x - size : left;
    top = deltaY < 0 ? startPoint.y - size : top;
    width = height = Math.abs(size);
  } else {
    left = deltaX < 0 ? pointer.x : left;
    top = deltaY < 0 ? pointer.y : top;
    width = Math.abs(deltaX);
    height = Math.abs(deltaY);
  }

  activeTool.set({ left, top, width, height });
}
