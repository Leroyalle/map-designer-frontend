import { Canvas, Rect, Circle } from 'fabric';
import { generateCanvasId } from './generate-canvas-id';

export class ShapeFactory {
  private static defaultObjectConfig = {
    left: 100,
    top: 100,
    fill: '#ccc',
  };

  static createRect(canvas: Canvas, config: Partial<Rect>) {
    const rect = new Rect({
      canvasId: generateCanvasId(),
      width: 100,
      height: 100,
      ...this.defaultObjectConfig,
      ...config,
    });
    canvas.add(rect);
    return rect;
  }

  static createCircle(canvas: Canvas, config: Partial<Circle>) {
    const circle = new Circle({
      canvasId: generateCanvasId(),
      radius: 50,
      ...this.defaultObjectConfig,
      ...config,
    });
    canvas.add(circle);
    return circle;
  }
}
