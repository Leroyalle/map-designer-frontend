import { ToolConfig } from '@/config';
import { ShapeType } from '@/types';
import { Canvas, FabricObject, Group, Text } from 'fabric';
import { RefObject } from 'react';

export const handleStopDrawShape = (
  activeToolRef: RefObject<FabricObject | null>,
  setSelectedObject: (object: FabricObject | null) => void,
  setSelectedTool: (object: ToolConfig | null) => void,
  shapeType: ShapeType,
  canvas: Canvas,
) => {
  console.log('canvas', canvas);
  console.log(' activeToolRef.current', activeToolRef.current);
  if (!activeToolRef.current) return;

  if (activeToolRef.current?.originX !== 'center' || activeToolRef.current?.originY !== 'center') {
    if (shapeType === 'door' || shapeType === 'elevator' || shapeType === 'ladder') {
      activeToolRef.current?.set({
        top:
          activeToolRef.current.top +
          (activeToolRef.current.height * activeToolRef.current.scaleY) / 2,
        left:
          activeToolRef.current.left +
          (activeToolRef.current.width * activeToolRef.current.scaleX) / 2,
      });
    } else {
      if (shapeType === 'rect') {
        const fontSize = Math.min(activeToolRef.current.width / 5, 20);
        const textShape = new Text(`${activeToolRef.current.name}`, {
          fontFamily: 'Delicious',
          left: activeToolRef.current.left + activeToolRef.current.width / 2,
          top: activeToolRef.current.top + activeToolRef.current.height / 2,
          originX: 'center',
          originY: 'center',
          fontSize,
        });

        const group = new Group([activeToolRef.current, textShape], {
          left: activeToolRef.current.left,
          top: activeToolRef.current.top,
          name: activeToolRef.current.name,
          originX: 'center',
          originY: 'center',
        });

        activeToolRef.current = group;
        activeToolRef.current.set({
          top:
            activeToolRef.current.top +
            activeToolRef.current.strokeWidth / 2 +
            activeToolRef.current.height / 2,
          left:
            activeToolRef.current.left +
            activeToolRef.current.strokeWidth / 2 +
            activeToolRef.current.width / 2,
        });

        canvas.add(activeToolRef.current);
        canvas.renderAll();
      }
    }

    activeToolRef.current?.set({
      originX: 'center',
      originY: 'center',
    });
  }

  switch (shapeType) {
    case 'line':
      if (activeToolRef.current instanceof Group) {
        activeToolRef.current.setControlsVisibility({
          tl: false,
          tr: false,
          bl: false,
          br: false,
          mt: false,
          mb: false,
        });
      }
      break;
    case 'door':
    case 'elevator':
      if (activeToolRef.current instanceof Group) {
        activeToolRef.current.setControlsVisibility({
          mt: false,
          ml: false,
          mr: false,
          mb: false,
        });
      }
      break;
    default:
      break;
  }

  activeToolRef.current = null;
  setSelectedObject(null);
  setSelectedTool(null);
};
