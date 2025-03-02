import { Canvas, FabricObject } from 'fabric';
import { ShapeFactory } from '../../shapes';
import { RefObject } from 'react';

export const rectCorrectPosition = (activeToolRef: RefObject<FabricObject>, canvas: Canvas) => {
  const fontSize = Math.min(activeToolRef.current.width / 5, 20);
  const textShape = ShapeFactory.createText(`${activeToolRef.current.name}`, {
    fontFamily: 'Delicious',
    left: activeToolRef.current.left + activeToolRef.current.width / 2,
    top: activeToolRef.current.top + activeToolRef.current.height / 2,
    fontSize,
  });
  const group = ShapeFactory.createGroup([activeToolRef.current, textShape], {
    left: activeToolRef.current.left,
    top: activeToolRef.current.top,
    name: activeToolRef.current.name,
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
