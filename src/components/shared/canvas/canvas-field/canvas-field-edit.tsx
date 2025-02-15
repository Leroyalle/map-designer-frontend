import React, { useEffect, useRef } from 'react';
import clsx from 'clsx';
import { useCanvasEvents, useCanvasInteractions, useInitCanvasEdit } from '@/hooks';
import { useCanvasSlice } from '@/store';
import { ProjectWithItems } from '@/types';

interface Props {
  project: ProjectWithItems;
  className?: string;
}

export const CanvasFieldEdit: React.FC<Props> = ({ project, className }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { canvas, setSelectedObject } = useCanvasSlice();
  const { canvasTransform } = useCanvasInteractions(containerRef);
  useInitCanvasEdit(canvasRef, project);
  useCanvasEvents(
    canvas,
    (object) => {
      setSelectedObject(object);
    },
    () => {
      setSelectedObject(null);
    },
  );

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.style.transform = `
        translate(${canvasTransform.x}px, ${canvasTransform.y}px) 
        scale(${canvasTransform.scale})
      `;
    }
  }, [canvasTransform]);

  return (
    <div className={clsx('w-fit p-4 select-none', className)} ref={containerRef}>
      <canvas id="canvas" ref={canvasRef} />
    </div>
  );
};
