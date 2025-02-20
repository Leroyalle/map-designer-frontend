import { Canvas, Point, TPointerEventInfo } from 'fabric';

export const handleCanvasZoom = (event: TPointerEventInfo<WheelEvent>, canvas: Canvas) => {
  event.e.preventDefault();
  event.e.stopPropagation();
  const scaleSettings = {
    min: 0.4,
    max: 3,
    sensitivity: 0.001,
  };
  const currentZoom = canvas.getZoom();
  const pointer = event.pointer;
  const delta = event.e.deltaY * scaleSettings.sensitivity;
  let newZoom = currentZoom * Math.pow(2, -delta);
  newZoom = Math.max(scaleSettings.min, Math.min(scaleSettings.max, newZoom));
  canvas.zoomToPoint(new Point(Math.round(pointer.x), Math.round(pointer.y)), newZoom);
  canvas.requestRenderAll();
};
