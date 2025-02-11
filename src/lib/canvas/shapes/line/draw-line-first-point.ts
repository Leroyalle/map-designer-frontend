import { Canvas, Line, TPointerEvent, TPointerEventInfo } from 'fabric';

// функция, для отрисовки линии от первой точки, установка первой точки
export function drawLineFirstPoint(
  e: TPointerEventInfo<TPointerEvent>,
  point1_x: number,
  point1_y: number,
  tempLine: Line | null,
  canvas: Canvas,
) {
  if (!e.pointer) return;
  canvas.selection = false;
  point1_x = e.pointer.x;
  point1_y = e.pointer.y;
  tempLine = new Line([point1_x, point1_y, point1_x, point1_y], {
    stroke: 'black',
    strokeWidth: 4,
    fill: null,
    hasBorders: false,
    lockMovementX: true,
    lockMovementY: true,
    lockScalingX: true,
    lockScalingY: true,
    angle: 0,
  });
  canvas.add(tempLine);
  return { point1_x, point1_y, tempLine };
}
