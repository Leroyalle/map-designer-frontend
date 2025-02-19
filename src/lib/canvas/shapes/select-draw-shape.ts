import { Image, Point } from 'fabric';
import { ShapeFactory } from './shape-factory';
import { ShapeType } from '@/types';

const imageSources: Partial<Record<ShapeType, string>> = {
  door: '/img/shapes/door-shape.png',
  ladder: '/img/shapes/ladder-shape.png',
  elevator: '/img/shapes/elevator-shape.png',
};

export const selectDrawShape = (shapeType: ShapeType, pointer: Point) => {
  if (shapeType === 'line') {
    return ShapeFactory.createLine([pointer.x, pointer.y, pointer.x, pointer.y]);
  }

  if (shapeType === 'rect') {
    return ShapeFactory.createRect({ left: pointer.x, top: pointer.y, width: 0, height: 0 });
  }

  if (shapeType === 'circle') {
    return ShapeFactory.createCircle({ left: pointer.x, top: pointer.y });
  }
  if (imageSources[shapeType]) {
    return new Promise<Image>((resolve) => {
      const image = document.createElement('img');
      image.src = imageSources[shapeType] as string;
      image.addEventListener('load', () => {
        resolve(
          ShapeFactory.createImg(image, {
            left: pointer.x,
            top: pointer.y,
          }),
        );
      });
    });
  }
};
