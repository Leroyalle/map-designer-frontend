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
    activeToolRef.current?.set({
      originX: 'center',
      originY: 'center',
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
  if (!activeToolRef.current) return;
  {
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
      activeToolRef.current.setControlsVisibility({
        mt: false,
        ml: false,
        mr: false,
        mb: false,
      });
      break;

    default:
      return;
  }
  activeToolRef.current = null;
  setSelectedObject(null);
  setSelectedTool(null);
};
