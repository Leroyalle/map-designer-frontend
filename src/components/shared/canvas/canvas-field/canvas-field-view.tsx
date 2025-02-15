import React, { useRef } from 'react';
import { useCanvasEvents, useInitCanvasView } from '@/hooks';
import { useCanvasSlice } from '@/store';
import { ProjectWithItems } from '@/types';
import { cn } from '@/lib';

interface Props {
  project: ProjectWithItems;
  className?: string;
}

export const CanvasFieldView: React.FC<Props> = ({ project, className }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { canvas, setSelectedObject } = useCanvasSlice();
  useInitCanvasView(canvasRef, project);
  useCanvasEvents(
    canvas,
    (object) => {
      setSelectedObject(object);
    },
    () => {
      setSelectedObject(null);
    },
  );

  return (
    <div className={cn('view-mode', className)}>
      <canvas id="canvas" ref={canvasRef} />
    </div>
  );
};
