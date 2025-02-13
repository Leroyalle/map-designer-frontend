import { Rect, Circle, Line } from 'fabric';

export class ShapeFactory {
  private static defaultObjectConfig = {
    // left: 100,
    // top: 100,
    fill: 'transparent',
    stroke: 'black',
    strokeWidth: 4,
  };

  static createRect(config: Partial<Rect>) {
    const rect = new Rect({
      originY: 'center',
      originX: 'center',

      ...config,
      ...ShapeFactory.defaultObjectConfig,
    });
    return rect;
  }

  static createCircle(config: Partial<Circle>) {
    const circle = new Circle({
      left: 100,
      top: 100,
      width: 100,
      height: 100,
      originY: 'center',
      originX: 'center',
      ...ShapeFactory.defaultObjectConfig,
      ...config,
    });
    return circle;
  }

  static createLine(points: [number, number, number, number], config?: Partial<Line>) {
    const line = new Line(points, {
      lockScalingY: true,
      originX: 'center',
      originY: 'center',

      ...ShapeFactory.defaultObjectConfig,

      ...config,
    });
    return line;
  }
}
