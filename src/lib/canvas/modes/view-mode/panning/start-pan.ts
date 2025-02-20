import { Point, TPointerEventInfo } from 'fabric';
import { RefObject } from 'react';

export const startPan = (
  event: TPointerEventInfo<MouseEvent>,
  isSpacePressed: RefObject<boolean>,
  isPanning: RefObject<boolean>,
  lastPoint: RefObject<Point | null>,
) => {
  if (event.e.button !== 0 || !isSpacePressed.current) return;

  event.e.preventDefault();
  isPanning.current = true;
  lastPoint.current = new Point(event.e.clientX, event.e.clientY);
};
