import { Line } from 'fabric';
import { drawLineSnapAngle } from '../../draw-line-snap-angle';

export function updateLine(
  activeTool: Line,
  pointer: { x: number; y: number },
  isCtrlPressed: boolean,
) {
  if (!(activeTool instanceof Line)) return;
  const { x_first, y_first } = drawLineSnapAngle(activeTool.x1, activeTool.y1, pointer);
  activeTool.set({
    x2: isCtrlPressed ? pointer.x : x_first,
    y2: isCtrlPressed ? pointer.y : y_first,
  });
}
