import { Canvas, FabricObject } from 'fabric';
import { ShapeFactory } from './shape-factory';
import { ShapeType } from '@/types';
import { imageSources } from '@/config';
import { generateFrameName } from './generate-frame-name';
import { getRandomColor } from '@/lib';

interface Params extends FabricObject {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  src: string;
}
export const selectDrawShape = (
  shapeType: ShapeType,
  coords: { x: number; y: number },
  canvas: Canvas,
  params?: Params,
) => {
  const name = generateFrameName(canvas);
  const placeColor = getRandomColor();
  if (shapeType === 'line') {
    const lineParams = {
      ...params,
      x1: coords.x,
      y1: coords.y,
      x2: coords.x,
      y2: coords.y,
      name,
      placeColor,
    };
    return ShapeFactory.createLine(
      params
        ? [params.x1, params.y1, params.x2, params.y2]
        : [coords.x, coords.y, coords.x, coords.y],
      lineParams,
    );
  }

  if (shapeType === 'rect') {
    return ShapeFactory.createRect({
      left: coords.x,
      top: coords.y,
      width: 0,
      height: 0,
      name,
      placeColor,
      ...params,
    });
  }

  if (shapeType === 'ellipse') {
    return ShapeFactory.createCircle({
      left: coords.x,
      top: coords.y,
      name,
      placeColor,
      ...params,
    });
  }
  if (imageSources[shapeType] || (shapeType === 'image' && params?.src)) {
    const image = params ? params.src : (imageSources[shapeType] as string);
    return ShapeFactory.createImg(image, {
      left: coords.x,
      top: coords.y,
      name,
      placeColor,
      ...params,
    });
  }
};
