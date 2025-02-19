import { ToolConfig } from '@/config';
import { ShapeType } from '@/types';
import { FabricObject } from 'fabric';
import { RefObject } from 'react';

export const handleStopDrawShape = (
  activeToolRef: RefObject<FabricObject | null>,
  setSelectedObject: (object: FabricObject | null) => void,
  setSelectedTool: (object: ToolConfig | null) => void,
  shapeType: ShapeType,
) => {
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
      activeToolRef.current?.set({
        top:
          activeToolRef.current.top +
          activeToolRef.current.strokeWidth / 2 +
          activeToolRef.current.height / 2,
        left:
          activeToolRef.current.left +
          activeToolRef.current.strokeWidth / 2 +
          activeToolRef.current.width / 2,
      });
    }
    activeToolRef.current?.set({
      originX: 'center',
      originY: 'center',
    });
  }
  if (!activeToolRef.current) return;
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
  activeToolRef.current = null;
  setSelectedObject(null);
  setSelectedTool(null);
};
