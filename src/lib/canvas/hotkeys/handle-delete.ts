import { Canvas } from 'fabric';

export const handleDelete = (canvas: Canvas) => {
  canvas.getActiveObjects().forEach((obj) => {
    canvas.remove(obj);
  });
  canvas.discardActiveObject();
  canvas.requestRenderAll();
};
