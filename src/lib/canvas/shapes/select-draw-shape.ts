import { FabricObject, Image, Line } from 'fabric';
import { ShapeFactory } from './shape-factory';
import { ShapeType } from '@/types';

const imageSources: Partial<Record<ShapeType, string>> = {
  door: '/img/shapes/door-shape.png',
  ladder: '/img/shapes/ladder-shape.png',
  elevator: '/img/shapes/elevator-shape.png',
};

export const selectDrawShape = (
  shapeType: ShapeType,
  coords: { x: number; y: number },
  params?: FabricObject | Line | Image,
) => {
  if (shapeType === 'line') {
    return ShapeFactory.createLine(
      params
        ? [params.x1, params.y1, params.x2, params.y2]
        : [coords.x, coords.y, coords.x, coords.y],
      params,
    );
  }

  if (shapeType === 'rect') {
    return ShapeFactory.createRect({
      left: coords.x,
      top: coords.y,
      width: 0,
      height: 0,
      ...params,
    });
  }

  if (shapeType === 'ellipse') {
    return ShapeFactory.createCircle({ left: coords.x, top: coords.y, ...params });
  }
  if (imageSources[shapeType] || shapeType === 'image') {
    return new Promise<Image>((resolve) => {
      const image = document.createElement('img');
      image.src = params ? params.src : (imageSources[shapeType] as string);
      image.addEventListener('load', () => {
        resolve(
          ShapeFactory.createImg(image, {
            left: coords.x,
            top: coords.y,
            ...params,
          }),
        );
      });
    });
  }
};
