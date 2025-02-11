import { Canvas, Line, TPointerEvent, TPointerEventInfo } from 'fabric';
import { drawLineSnapAngle } from './draw-line-snap-angle';

// функция, отрисовывающая линию во время зажатой мышки, которую двигают
export function drawLineMouseMove(
  e: TPointerEventInfo<TPointerEvent>,
  tempLine: Line | null,
  isCtrlPressed: boolean,
  canvas: Canvas,
  point1_x: number,
  point1_y: number,
) {
  if (!e.pointer || !tempLine) return;
  tempLine.set({
    x2: isCtrlPressed ? e.pointer.x : drawLineSnapAngle(point1_x, point1_y, e).x_first,
    y2: isCtrlPressed ? e.pointer.y : drawLineSnapAngle(point1_x, point1_y, e).y_first,
  });
  tempLine.setCoords();
  canvas.renderAll();
}
