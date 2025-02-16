import { Canvas, Ellipse, FabricObject, Line, Point, Rect } from 'fabric';
import { ShapeType } from '@/types';
import { drawLineSnapAngle } from '../draw-line-snap-angle';

// функция, отрисовывающая линию во время зажатой мышки, которую двигают
export function drawShapeMouseMove(
  pointer: Point,
  shapeType: ShapeType,
  activeTool: FabricObject,
  isCtrlPressed: boolean,
  startPoint: Point,
  canvas: Canvas,
) {
  switch (shapeType) {
    case 'circle':
      if (activeTool instanceof Ellipse) {
        const deltaX = pointer.x - activeTool.left;
        const deltaY = pointer.y - activeTool.top;
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

        const radius = Math.round(distance);

        activeTool.set({
          rx: isCtrlPressed ? radius : Math.abs(pointer.x - activeTool.left),
          ry: isCtrlPressed ? radius : Math.abs(pointer.y - activeTool.top),
        });
      }
      break;
    case 'line':
      if (activeTool instanceof Line) {
        const { x_first, y_first } = drawLineSnapAngle(activeTool.x1, activeTool.y1, pointer);
        activeTool.setControlsVisibility({
          tl: false,
          tr: false,
          bl: false,
          br: false,
          mt: false,
          mb: false,
        });
        activeTool.set({
          x2: isCtrlPressed ? pointer.x : x_first,
          y2: isCtrlPressed ? pointer.y : y_first,
        });
      }
      break;
    case 'rect':
      if (activeTool instanceof Rect) {
        const deltaX = pointer.x - startPoint.x;
        const deltaY = pointer.y - startPoint.y;
        let left = startPoint.x;
        let top = startPoint.y;
        let width = deltaX;
        let height = deltaY;

        if (isCtrlPressed) {
          const size = Math.min(Math.abs(deltaX), Math.abs(deltaY));

          if (deltaX < 0) {
            left = startPoint.x - size;
          }
          if (deltaY < 0) {
            top = startPoint.y - size;
          }

          width = deltaX > 0 ? size : -size;
          height = deltaY > 0 ? size : -size;
        } else {
          if (deltaX < 0) {
            left = pointer.x;
            width = startPoint.x - pointer.x;
          }
          if (deltaY < 0) {
            top = pointer.y;
            height = startPoint.y - pointer.y;
          }
        }

        activeTool.set({
          left: left,
          top: top,
          width: Math.abs(width),
          height: Math.abs(height),
        });
      }
      break;

    default:
      break;
  }

  activeTool.setCoords();
  canvas.renderAll();
}
