import { Canvas, Point } from 'fabric';

export const handleMove = (
  e: MouseEvent,
  setCanvasTransform: React.Dispatch<React.SetStateAction<{ x: number; y: number; scale: number }>>,
  lastPosition: React.RefObject<Point | null>,
  canvas: Canvas,
) => {
  if (!lastPosition.current) return;

  const deltaX = e.clientX - lastPosition.current.x;
  const deltaY = e.clientY - lastPosition.current.y;

  setCanvasTransform((prevTransform) => ({
    ...prevTransform,
    x: prevTransform.x + deltaX,
    y: prevTransform.y + deltaY,
  }));

  lastPosition.current = canvas.getPointer(e);
};
