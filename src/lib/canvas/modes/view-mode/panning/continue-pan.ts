import { Canvas, Point, TPointerEventInfo } from 'fabric';
import { RefObject } from 'react';

export const continuePan = (
  event: TPointerEventInfo<MouseEvent>,
  isPanning: RefObject<boolean>,
  lastPoint: RefObject<Point | null>,
  canvas: Canvas,
): boolean => {
  if (!isPanning.current || !lastPoint.current) return true;

  const DAMPING_FACTOR = 1.036 - 0.00035 * window.innerWidth;

  const currentPoint = new Point(event.e.clientX, event.e.clientY);

  const delta = new Point(
    (currentPoint.x - lastPoint.current.x) * DAMPING_FACTOR,
    (currentPoint.y - lastPoint.current.y) * DAMPING_FACTOR,
  );

  const zoom = canvas.getZoom();
  const viewWidth = canvas.getWidth() / zoom;
  const viewHeight = canvas.getHeight() / (canvas.getWidth() / canvas.getHeight()) / zoom;
  const viewX = -canvas.viewportTransform[4] / zoom;
  const viewY = -canvas.viewportTransform[5] / zoom;

  let isBack = true;

  for (const obj of canvas.getObjects()) {
    const coords = obj.getBoundingRect();

    if (
      coords.left + coords.width > viewX &&
      coords.left < viewX + viewWidth &&
      coords.top + coords.height > viewY &&
      coords.top < viewY + viewHeight
    ) {
      isBack = false;
      break;
    }
  }
  canvas.relativePan(delta);
  lastPoint.current = currentPoint;

  return isBack;
};
