import { Canvas, TPointerEvent, TPointerEventInfo } from 'fabric';
import { drawLineSnapAngle } from './draw-line-snap-angle';
import { lineState } from '@/config';

// функция, отрисовывающая линию во время зажатой мышки, которую двигают
export function drawLineMouseMove(
  e: TPointerEventInfo<TPointerEvent>,
  { tempLine, startpoint, isCtrlPressed }: lineState,
  canvas: Canvas,
) {
  if (!e.pointer || !tempLine) return;
  const { x_first, y_first } = drawLineSnapAngle(startpoint.x, startpoint.y, e);
  tempLine.set({
    x2: isCtrlPressed ? e.pointer.x : x_first,
    y2: isCtrlPressed ? e.pointer.y : y_first,
  });
  tempLine.setCoords();
  canvas.requestRenderAll();
}
