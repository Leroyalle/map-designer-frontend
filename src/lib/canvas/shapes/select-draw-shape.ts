import { Image, Point } from 'fabric';
import { ShapeFactory } from './shape-factory';
import { ShapeType } from '@/types';

export const selectDrawShape = (shapeType: ShapeType, pointer: Point) => {
  switch (shapeType) {
    case 'line':
      return ShapeFactory.createLine([pointer.x, pointer.y, pointer.x, pointer.y]);

    case 'rect':
      return ShapeFactory.createRect({
        left: pointer.x,
        top: pointer.y,
        width: 0,
        height: 0,
      });

    case 'circle':
      return ShapeFactory.createCircle({
        left: pointer.x,
        top: pointer.y,
      });

    case 'door':
      return new Promise((resolve) => {
        const image = document.createElement('img');
        image.src = '/img/shapes/door-shape.png';

        image.addEventListener('load', () => {
          resolve(
            ShapeFactory.createImg(image, {
              left: pointer.x,
              top: pointer.y,
              width: 108,
              height: 108,
            }),
          );
        });
      });

    case 'ladder':
      return new Promise<Image>((resolve) => {
        const image = document.createElement('img');
        image.src = '/img/shapes/ladder-shape.png';
        image.addEventListener('load', () => {
          resolve(
            ShapeFactory.createImg(image, {
              left: pointer.x,
              top: pointer.y,
              width: 512,
              height: 200,
            }),
          );
        });
      });

    case 'elevator':
      return new Promise((resolve) => {
        const image = document.createElement('img');
        image.src = '/img/shapes/elevator-shape.png';
        image.addEventListener('load', () => {
          resolve(
            ShapeFactory.createImg(image, {
              left: pointer.x,
              top: pointer.y,
              width: 200,
              height: 200,
            }),
          );
        });
      });

    // case 'window':
    //   return;

    default:
      return null;
  }
};
