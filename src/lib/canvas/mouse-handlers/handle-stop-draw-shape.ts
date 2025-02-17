import { ToolConfig } from '@/config';
import { FabricObject } from 'fabric';
import { RefObject } from 'react';

export const handleStopDrawShape = (
  activeToolRef: RefObject<FabricObject | null>,
  setSelectedObject: (object: FabricObject | null) => void,
  setSelectedTool: (object: ToolConfig | null) => void,
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
  activeToolRef.current = null;
  setSelectedObject(null);
  setSelectedTool(null);
};
