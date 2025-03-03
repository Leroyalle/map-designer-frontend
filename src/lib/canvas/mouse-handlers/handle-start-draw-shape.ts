import { ToolConfig } from '@/config';
import { Canvas, FabricObject, Point, TPointerEvent, TPointerEventInfo } from 'fabric';
import { drawShapeFirstPoint } from '../shapes';
import { RefObject } from 'react';

export const handleStartDrawShape = (
  e: TPointerEventInfo<TPointerEvent>,
  canvas: Canvas,
  selectedTool: ToolConfig | null,
  activeToolRef: RefObject<FabricObject | null>,
  startPoint: RefObject<Point | null>,
) => {
  if (e.target) {
    e.target.selectable = false;
    e.target.evented = false;
    canvas.discardActiveObject();
    canvas.requestRenderAll();
  }
  if (!selectedTool) return;

  drawShapeFirstPoint(e, selectedTool.type, activeToolRef, startPoint, canvas);

  if (e.target) {
    e.target.selectable = true;
    e.target.evented = true;
  }
};
