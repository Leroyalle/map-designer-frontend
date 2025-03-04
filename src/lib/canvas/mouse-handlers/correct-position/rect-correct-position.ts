import { Canvas, FabricObject } from 'fabric';
import { ShapeFactory } from '../../shapes';
import { RefObject } from 'react';

export const rectCorrectPosition = (activeToolRef: RefObject<FabricObject>, canvas: Canvas) => {
  const fontSize = Math.min(activeToolRef.current.width / 5, 20);

  const boundingRect = activeToolRef.current.getBoundingRect();
  const textShape = ShapeFactory.createText(`${activeToolRef.current.name}`, {
    fontFamily: 'Delicious',
    left: boundingRect.left + activeToolRef.current.width / 2,
    top: boundingRect.top + activeToolRef.current.height / 2,
    evented: false,
    originY: 'center',
    originX: 'center',
    selectable: false,

    fontSize,
  });

  const group = ShapeFactory.createGroup([activeToolRef.current, textShape], {
    left: boundingRect.left,
    top: boundingRect.top,
    name: activeToolRef.current.name,
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
  canvas.renderAll();
  return activeToolRef.current;
};
