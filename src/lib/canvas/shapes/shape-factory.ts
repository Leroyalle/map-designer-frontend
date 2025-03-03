import {
  Rect,
  Line,
  Ellipse,
  FabricImage,
  Image,
  GroupProps,
  Group,
  FabricObject,
  Text,
} from 'fabric';
import { generateCanvasId } from './generate-canvas-id';

export class ShapeFactory {
  private static defaultObjectConfig = {
    fill: 'transparent',
    strokeUniform: true,
    noScaleCache: false,
    stroke: 'black',
    strokeWidth: 4,
  };

  static createRect(config: Partial<Rect>) {
    return new Rect({
      canvasId: generateCanvasId(),
      originY: 'top',
      originX: 'left',
      ...config,
      ...ShapeFactory.defaultObjectConfig,
    });
  }

  static createCircle(config: Partial<Ellipse>) {
    return new Ellipse({
      canvasId: generateCanvasId(),
      originY: 'center',
      originX: 'center',
      ...ShapeFactory.defaultObjectConfig,
      ...config,
    });
  }
  static createGroup(objects: FabricObject[], config: Partial<GroupProps>) {
    return new Group(objects, {
      canvasId: generateCanvasId(),
      originY: 'center',
      originX: 'center',
      noScaleCache: false,
      ...config,
    });
  }
  static createText(text: string, config: Partial<Text>) {
    return new Text(text, {
      canvasId: generateCanvasId(),
      noScaleCache: false,
      ...config,
    });
  }

  static createImg(image: string, config: Partial<FabricImage>) {
    return new Promise<Image>((resolve) => {
      const imageElem = document.createElement('img');
      imageElem.src = image;
      imageElem.onload = () => {
        resolve(
          new FabricImage(imageElem, {
            canvasId: generateCanvasId(),
            scaleX: 0,
            scaleY: 0,
            ...config,
          }),
        );
      };
    });
  }
  static createLine(points: [number, number, number, number], config?: Partial<Line>) {
    return new Line(points, {
      canvasId: generateCanvasId(),
      lockScalingY: true,
      originY: 'center',
      originX: 'center',
      ...ShapeFactory.defaultObjectConfig,
      ...config,
    });
  }
}
