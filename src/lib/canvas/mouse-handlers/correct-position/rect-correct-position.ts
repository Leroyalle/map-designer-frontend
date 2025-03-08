import { Canvas, FabricObject } from 'fabric';
import { ShapeFactory } from '../../shapes';
import { RefObject } from 'react';
import { getRandomColor } from '@/lib/shared';

export const rectCorrectPosition = (activeToolRef: RefObject<FabricObject>, canvas: Canvas) => {
  const rect = activeToolRef.current;
  const fontSize = Math.min(rect.width / 5, 20);

  const boundingRect = rect.getBoundingRect();
  const textShape = ShapeFactory.createText(`${rect.name}`, {
    fontFamily: 'Delicious',
    left: boundingRect.left + rect.width / 2,
    top: boundingRect.top + rect.height / 2,
    evented: false,
    originY: 'center',
    originX: 'center',
    selectable: false,

    fontSize,
  });
  console.log(rect);
  const group = ShapeFactory.createGroup([rect, textShape], {
    left: boundingRect.left,
    top: boundingRect.top,
    name: activeToolRef.current.name,
    placeColor: getRandomColor(),
  });
  group.on('scaling', () => {
    textShape.set({
      scaleX: 1 / group.scaleX,
      scaleY: 1 / group.scaleY,
      flipX: false,
      flipY: false,
    });
    canvas.renderAll();
  });

  activeToolRef.current = group;
  group.set({
    top: group.top + group.strokeWidth / 2 + group.height / 2,
    left: group.left + group.strokeWidth / 2 + group.width / 2,
  });
  canvas.add(group);
  canvas.setActiveObject(group);
  canvas.remove(rect);
  canvas.renderAll();
  return activeToolRef.current;
};
