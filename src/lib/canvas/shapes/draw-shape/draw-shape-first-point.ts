import { ShapeType } from '@/types';
import { Canvas, FabricObject, TPointerEvent, TPointerEventInfo } from 'fabric';
import { selectDrawShape } from '../select-draw-shape';
import { Point } from 'framer-motion';

// функция, для отрисовки фигуры от первой точки, установка первой точки
export async function drawShapeFirstPoint(
  elem: TPointerEventInfo<TPointerEvent>,
  shapeType: ShapeType,
  activeToolRef: React.MutableRefObject<FabricObject | null>,
  startPoint: { current: Point | null },
  canvas: Canvas,
) {
  const pointer = canvas.getPointer(elem.e);
  canvas.selection = false;

  const shape = await selectDrawShape(shapeType, pointer, canvas);
  if (shape) {
    console.log('shape', shape);
    canvas.add(shape);
    activeToolRef.current = shape;
    startPoint.current = pointer;
    return startPoint;
  }
}
