import { Canvas, Point, TPointerEventInfo } from 'fabric';
import { RefObject } from 'react';

export const continuePan = (
  event: TPointerEventInfo<MouseEvent>,
  isPanning: RefObject<boolean>,
  lastPoint: RefObject<Point | null>,
  canvas: Canvas,
) => {
  if (!isPanning.current || !lastPoint.current) return;
  const DAMPING_FACTOR = 0.5;

  const currentPoint = new Point(event.e.clientX, event.e.clientY);
  const delta = new Point(
    (currentPoint.x - lastPoint.current.x) * DAMPING_FACTOR,
    (currentPoint.y - lastPoint.current.y) * DAMPING_FACTOR,
  );

  canvas.relativePan(delta);
  lastPoint.current = currentPoint;
};
