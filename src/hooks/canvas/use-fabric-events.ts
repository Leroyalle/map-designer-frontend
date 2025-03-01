'use client';
import { ToolConfig } from '@/config';
import {
  handleMoveDrawShape,
  handleStartDrawShape,
  handleStopDrawShape,
  shapeRotation,
} from '@/lib';
import {
  BasicTransformEvent,
  Canvas,
  FabricObject,
  Point,
  TPointerEvent,
  TPointerEventInfo,
} from 'fabric';
import { RefObject, useEffect } from 'react';

export const useFabricEvents = (
  canvas: Canvas | null,
  selectedTool: ToolConfig | null,
  selectedObject: FabricObject | null,
  activeToolRef: RefObject<FabricObject | null>,
  startPoint: RefObject<Point | null>,
  lastPosition: RefObject<{
    x: number;
    y: number;
  } | null>,
  activeButtonPressed: RefObject<KeyboardEvent['code'] | null>,
  setSelectedObject: (object: FabricObject | null) => void,
  setSelectedTool: (object: ToolConfig | null) => void,
) => {
  useEffect(() => {
    if (!canvas || !selectedTool || selectedObject) return;

    const onMouseDown = (e: TPointerEventInfo<TPointerEvent>) => {
      handleStartDrawShape(e, canvas, selectedTool, activeToolRef, startPoint);
    };
    const onMouseMove = (e: TPointerEventInfo<TPointerEvent>) => {
      handleMoveDrawShape(
        e,
        canvas,
        selectedTool,
        activeToolRef,
        startPoint,
        lastPosition,
        activeButtonPressed,
      );
    };
    const onMouseUp = () => {
      handleStopDrawShape(
        activeToolRef,
        setSelectedObject,
        setSelectedTool,
        selectedTool.type,
        canvas,
      );
    };
    const onRotate = (
      e: BasicTransformEvent<TPointerEvent> & {
        target: FabricObject;
      },
    ) => {
      shapeRotation(e, activeButtonPressed.current === 'ControlLeft', canvas);
    };

    canvas.on('mouse:down', onMouseDown);
    canvas.on('mouse:move', onMouseMove);
    canvas.on('mouse:up', onMouseUp);
    canvas.on('object:rotating', onRotate);

    return () => {
      if (canvas) {
        canvas.off('mouse:down');
        canvas.off('mouse:move');
        canvas.off('mouse:up');
      }
    };
  }, [canvas, selectedTool, activeButtonPressed.current]);
};
