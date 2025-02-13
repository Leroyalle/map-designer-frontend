import { Canvas, TPointerEvent, TPointerEventInfo } from 'fabric';
import { ShapeType } from '@/types';
import { drawLineSnapAngle } from '../line/draw-line-snap-angle';

// функция, отрисовывающая линию во время зажатой мышки, которую двигают
export function drawShapeMouseMove(
  elem: TPointerEventInfo<TPointerEvent>,
  shapeType: ShapeType,
  canvas: Canvas,
) {
  const pointer = canvas.getPointer(elem.e);
  const { x_first, y_first } = drawLineSnapAngle(pointer.x, pointer.y, pointer);

  switch (shapeType) {
    case 'circle':
      return;
    case 'line':
      return tempShape.set({
        x2: isCtrlPressed ? e.pointer.x : x_first,
        y2: isCtrlPressed ? e.pointer.y : y_first,
      });
    case 'rect':
      return;

    default:
      return null;
  }

  tempShape.setCoords();
  canvas.requestRenderAll();
}
