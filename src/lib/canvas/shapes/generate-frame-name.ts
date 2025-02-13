import { Canvas } from 'fabric';

export const generateFrameName = (canvas: Canvas) => {
  return `Frame-${canvas.getObjects().length + 1}`;
};
