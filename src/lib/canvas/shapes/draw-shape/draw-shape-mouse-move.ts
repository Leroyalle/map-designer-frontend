import { Canvas, Ellipse, FabricImage, FabricObject, Line, Point, Rect } from 'fabric';
import { ShapeType } from '@/types';
import { updateCircle, updateImage, updateLine, updateRect } from './update-shapes';

// функция, отрисовывающая линию во время зажатой мышки, которую двигают
export function drawShapeMouseMove(
  pointer: { x: number; y: number },
  shapeType: ShapeType,
  activeTool: FabricObject,
  isCtrlPressed: boolean,
  startPoint: Point,
  canvas: Canvas,
) {
  const deltaX = pointer.x - startPoint.x;
  const deltaY = pointer.y - startPoint.y;
  switch (shapeType) {
    case 'ellipse':
      if (activeTool instanceof Ellipse) {
        updateCircle(activeTool, deltaX, deltaY, pointer, isCtrlPressed);
      }
      break;
    case 'line':
      if (activeTool instanceof Line) {
        updateLine(activeTool, pointer, isCtrlPressed);
      }
      break;
    case 'rect':
      if (activeTool instanceof Rect) {
        updateRect(activeTool, deltaX, deltaY, pointer, startPoint, isCtrlPressed);
      }
      break;
    case 'door':
    case 'elevator':
    case 'ladder':
      if (activeTool instanceof FabricImage) {
        updateImage(activeTool, deltaX, deltaY, startPoint, shapeType);
      }
      break;

    default:
      break;
  }

  canvas.renderAll();
}
