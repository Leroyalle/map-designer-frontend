import { Ellipse } from 'fabric';

export function updateCircle(
  activeTool: Ellipse,
  deltaX: number,
  deltaY: number,
  pointer: { x: number; y: number },
  isCtrlPressed: boolean,
) {
  if (!(activeTool instanceof Ellipse)) return;
  const radius = Math.round(Math.sqrt(deltaX ** 2 + deltaY ** 2));
  activeTool.set({
    rx: isCtrlPressed ? radius : Math.abs(pointer.x - activeTool.left),
    ry: isCtrlPressed ? radius : Math.abs(pointer.y - activeTool.top),
  });
}
