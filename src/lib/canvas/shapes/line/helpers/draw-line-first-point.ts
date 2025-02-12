import { Canvas, TPointerEvent, TPointerEventInfo } from 'fabric';
import { ShapeFactory } from '../../shape-factory';
import { lineState } from '@/config';

// функция, для отрисовки линии от первой точки, установка первой точки
export function drawLineFirstPoint(
  e: TPointerEventInfo<TPointerEvent>,
  { tempLine, startpoint }: lineState,

  canvas: Canvas,
) {
  if (!e.pointer) return null;
  if (tempLine) {
    canvas.remove(tempLine);
  }
  canvas.selection = false;
  startpoint.x = e.pointer.x;
  startpoint.y = e.pointer.y;
  tempLine = ShapeFactory.createLine([startpoint.x, startpoint.y, startpoint.x, startpoint.y]);
  canvas.add(tempLine);
  return { tempLine, startpoint };
}
