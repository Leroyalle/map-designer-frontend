import { Rect, Line, Ellipse } from 'fabric';

export class ShapeFactory {
  private static defaultObjectConfig = {
    fill: 'transparent',
    stroke: 'black',
    strokeWidth: 4,
  };

  static createRect(config: Partial<Rect>) {
    const rect = new Rect({
      originY: 'top',
      originX: 'left',
      ...config,
      ...ShapeFactory.defaultObjectConfig,
    });
    return rect;
  }

  static createCircle(config: Partial<Ellipse>) {
    const ellipse = new Ellipse({
      originY: 'center',
      originX: 'center',
      ...ShapeFactory.defaultObjectConfig,
      ...config,
    });
    return ellipse;
  }

  static createLine(points: [number, number, number, number], config?: Partial<Line>) {
    const line = new Line(points, {
      lockScalingY: true,
      originY: 'center',
      originX: 'center',
      ...ShapeFactory.defaultObjectConfig,

      ...config,
    });
    return line;
  }
}
