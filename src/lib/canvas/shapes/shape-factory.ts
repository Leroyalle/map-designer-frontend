import { Canvas, Rect, Circle } from 'fabric';

export class ShapeFactory {
  static createRect(canvas: Canvas, config: Partial<Rect>) {
    const rect = new Rect({
      left: 100,
      top: 100,
      width: 100,
      height: 100,
      fill: '#ccc',
      ...config,
    });
    canvas.add(rect);
    return rect;
  }

  static createCircle(canvas: Canvas, config: Partial<Circle>) {
    const circle = new Circle({
      left: 100,
      top: 100,
      width: 100,
      height: 100,
      fill: '#ccc',
      ...config,
    });
    canvas.add(circle);
    return circle;
  }
}
