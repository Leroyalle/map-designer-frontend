import { Canvas, TPointerEvent, TPointerEventInfo } from 'fabric';
import { drawLineSnapAngle } from './draw-line-snap-angle';
import { ShapeFactory } from '../../shape-factory';
import { lineState } from '@/config';

// функция для отрисовки линии, где будет указана вторая точка
export function drawLineSecondPoint(
  e: TPointerEventInfo<TPointerEvent>,
  { tempLine, startpoint, isCtrlPressed }: lineState,
  canvas: Canvas,
) {
  if (!e.pointer || !tempLine) return null;
  canvas.remove(tempLine);

  const { x_first, y_first } = drawLineSnapAngle(startpoint.x, startpoint.y, e);

  const finalLine = ShapeFactory.createLine([
    startpoint.x,
    startpoint.y,
    isCtrlPressed ? e.pointer.x : x_first,
    isCtrlPressed ? e.pointer.y : y_first,
  ]);
  finalLine.setControlsVisibility({
    mt: false,
    mb: false,
    br: false,
    bl: false,
    tr: false,
    tl: false,
  });
  canvas.add(finalLine);
  canvas.discardActiveObject();
  canvas.requestRenderAll();
  canvas.off('mouse:down');
  canvas.selection = true;

  return null;
}
