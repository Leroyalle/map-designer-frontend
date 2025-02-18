import { Rect, Line, Ellipse, FabricImage, ImageSource } from 'fabric';

export class ShapeFactory {
  private static defaultObjectConfig = {
    fill: 'transparent',
    strokeUniform: true,
    noScaleCache: false,
    // stroke: '#bcbcbc',
    stroke: 'black',
    strokeWidth: 2,
  };

  static createRect(config: Partial<Rect>) {
    return new Rect({
      originY: 'top',
      originX: 'left',
      ...config,
      ...ShapeFactory.defaultObjectConfig,
    });
  }

  static createCircle(config: Partial<Ellipse>) {
    return new Ellipse({
      originY: 'center',
      originX: 'center',
      ...ShapeFactory.defaultObjectConfig,
      ...config,
    });
  }

  static createImg(image: ImageSource, config: Partial<FabricImage>) {
    return new FabricImage(image, {
      ...config,
    });
  }

  static createLine(points: [number, number, number, number], config?: Partial<Line>) {
    return new Line(points, {
      lockScalingY: true,
      originY: 'center',
      originX: 'center',
      ...ShapeFactory.defaultObjectConfig,

      ...config,
    });
  }
}
