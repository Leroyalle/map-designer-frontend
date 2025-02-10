import { Canvas, Rect, Circle } from 'fabric';
import { generateId } from './generate-id';

export class ShapeFactory {
  private static defaultObjectConfig = {
    left: 100,
    top: 100,
    fill: '#ccc',
  };

  static createRect(canvas: Canvas, config: Partial<Rect>) {
    const rect = new Rect({
      id: generateId(),
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
      id: generateId(),
      radius: 50,
      ...this.defaultObjectConfig,
      ...config,
    });
    canvas.add(circle);
    return circle;
  }
}
