import { ShapeType } from '@/types';
import { Canvas, TPointerEvent, TPointerEventInfo } from 'fabric';
import { selectDrawShape } from '../select-draw-shape';

// функция, для отрисовки фигуры от первой точки, установка первой точки
export function drawShapeFirstPoint(
  elem: TPointerEventInfo<TPointerEvent>,
  shapeType: ShapeType,
  canvas: Canvas,
) {
  // const target = canvas.findTarget(elem.e);

  const pointer = canvas.getPointer(elem.e);
  canvas.selection = false;
  const shape = selectDrawShape(shapeType, pointer);
  if (shape) canvas.add(shape);

  // canvas.setActiveObject(target);
  // target.setCoords();
}
