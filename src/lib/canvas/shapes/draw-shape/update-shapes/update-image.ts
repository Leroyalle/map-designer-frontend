import { FabricImage, Point } from 'fabric';
import { ShapeType } from '@/types';

export function updateImage(
  activeTool: FabricImage,
  deltaX: number,
  deltaY: number,
  startPoint: Point,
  shapeType: ShapeType,
) {
  if (!(activeTool instanceof FabricImage)) return;

  const isLadder = shapeType === 'ladder' || shapeType === 'window';
  const currentWidth = Math.abs(deltaX);
  const currentHeight = Math.abs(deltaY);

  const scaleX = currentWidth / activeTool.width;
  const scaleY = currentHeight / activeTool.height;
  const scale = Math.min(scaleX, scaleY);

  const flipX = deltaX < 0;
  const flipY = deltaY < 0;

  const left =
    deltaX < 0 ? startPoint.x - activeTool.width * (isLadder ? scaleX : scale) : startPoint.x;
  const top =
    deltaY < 0 ? startPoint.y - activeTool.height * (isLadder ? scaleY : scale) : startPoint.y;

  activeTool.set({
    scaleX: isLadder ? scaleX : scale,
    scaleY: isLadder ? scaleY : scale,
    flipX,
    flipY,
    left,
    top,
  });
}
