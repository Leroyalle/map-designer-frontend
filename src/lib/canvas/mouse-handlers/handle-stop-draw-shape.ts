import { ToolConfig } from '@/config';
import { ShapeType } from '@/types';
import { Canvas, FabricObject } from 'fabric';
import { RefObject } from 'react';
import { rectCorrectPosition } from './correct-position';

export const handleStopDrawShape = (
  activeToolRef: RefObject<FabricObject | null>,
  setSelectedObject: (object: FabricObject | null) => void,
  setSelectedTool: (object: ToolConfig | null) => void,
  shapeType: ShapeType,
  canvas: Canvas,
) => {
  if (!activeToolRef.current) return;

  if (activeToolRef.current.originX !== 'center' || activeToolRef.current.originY !== 'center') {
    if (
      shapeType === 'door' ||
      shapeType === 'elevator' ||
      shapeType === 'ladder' ||
      shapeType === 'window'
    ) {
      activeToolRef.current.set({
        top:
          activeToolRef.current.top +
          (activeToolRef.current.height * activeToolRef.current.scaleY) / 2,
        left:
          activeToolRef.current.left +
          (activeToolRef.current.width * activeToolRef.current.scaleX) / 2,
      });
    }
    if (shapeType === 'rect') {
      activeToolRef.current = rectCorrectPosition(activeToolRef, canvas);
    }
    activeToolRef.current.set({
      originX: 'center',
      originY: 'center',
    });
  }
  switch (shapeType) {
    case 'line':
      activeToolRef.current.setControlsVisibility({
        tl: false,
        tr: false,
        bl: false,
        br: false,
        mt: false,
        mb: false,
      });
      break;
    case 'door':
    case 'elevator':
      activeToolRef.current.setControlsVisibility({
        mt: false,
        ml: false,
        mr: false,
        mb: false,
      });
      break;
    default:
      break;
  }
  console.log(activeToolRef.current);

  activeToolRef.current = null;
  setSelectedObject(null);
  setSelectedTool(null);
};
