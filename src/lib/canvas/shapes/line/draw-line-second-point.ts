import { Canvas, Line, TPointerEvent, TPointerEventInfo } from 'fabric';
import { drawLineSnapAngle } from './draw-line-snap-angle';

// функция для отрисовки линии, где будет указана вторая точка
export function drawLineSecondPoint(
  e: TPointerEventInfo<TPointerEvent>,
  canvas: Canvas,
  point1_x: number,
  point1_y: number,
  isCtrlPressed: boolean,
) {
  if (!e.pointer) return;
  canvas.selection = true;
  const point2_x = e.pointer.x;
  const point2_y = e.pointer.y;

  const finalLine = new Line(
    [
      point1_x,
      point1_y,
      isCtrlPressed ? point2_x : drawLineSnapAngle(point1_x, point1_y, e).x_first,
      isCtrlPressed ? point2_y : drawLineSnapAngle(point1_x, point1_y, e).y_first,
    ],
    {
      stroke: 'black',
      strokeWidth: 4,
      fill: null,
      lockScalingY: true,
      hasControls: true,
      hasBorders: true,
      originX: 'center',
      originY: 'center',
    },
  );
  finalLine.setControlsVisibility({
    mt: false,
    mb: false,
    br: false,
    bl: false,
    tr: false,
    tl: false,
  });

  canvas.add(finalLine);

  canvas.off('mouse:down');

  canvas.discardActiveObject();
  canvas.requestRenderAll();
}
