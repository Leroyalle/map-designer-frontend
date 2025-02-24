import { ToolConfig } from '@/config';
import { Canvas, FabricObject, Point, TPointerEvent, TPointerEventInfo } from 'fabric';
import { RefObject } from 'react';
import { drawShapeMouseMove } from '../shapes';

export const handleMoveDrawShape = (
  e: TPointerEventInfo<TPointerEvent>,
  canvas: Canvas,
  selectedTool: ToolConfig | null,
  activeToolRef: RefObject<FabricObject | null>,
  startPoint: RefObject<Point | null>,
  lastPosition: RefObject<{
    x: number;
    y: number;
  } | null>,
  activeButtonPressed: RefObject<string | null>,
) => {
  if (
    !activeToolRef.current ||
    !startPoint.current ||
    !selectedTool ||
    activeButtonPressed.current === 'Space'
  )
    return;
  const pointer = canvas.getPointer(e.e);
  lastPosition.current = pointer;

  drawShapeMouseMove(
    pointer,
    selectedTool.type,
    activeToolRef.current,
    activeButtonPressed.current === 'ControlLeft',
    startPoint.current,
    canvas,
  );
};
