import { Point } from 'fabric';
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

    default:
      return null;
  }
};
