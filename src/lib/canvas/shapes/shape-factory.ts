import { Rect, Circle, Line } from 'fabric';

export class ShapeFactory {
  private static defaultObjectConfig = {
    left: 100,
    top: 100,
    fill: '#ccc',
  };

  static createRect(config: Partial<Rect>) {
    const rect = new Rect({
      fill: 'transparent',
      stroke: 'black',
      strokeWidth: 4,
      originX: 'center',
      originY: 'center',

      ...config,
    });
    return rect;
  }

  static createCircle(config: Partial<Circle>) {
    const circle = new Circle({
      left: 100,
      top: 100,
      width: 100,
      height: 100,
      fill: 'transparent',
      stroke: 'black',
      originX: 'center',
      originY: 'center',
      strokeWidth: 4,
      ...config,
    });
    return circle;
  }

  static createLine(points: [number, number, number, number], config?: Partial<Line>) {
    const line = new Line(points, {
      stroke: 'black',
      strokeWidth: 4,
      fill: null,
      lockScalingY: true,
      originX: 'center',
      originY: 'center',

      ...config,
    });
    return line;
  }
}
