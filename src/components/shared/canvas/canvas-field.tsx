import React, { useEffect, useRef } from 'react';
import clsx from 'clsx';
import { useCanvasEvents, useCanvasInteractions, useInitCanvas } from '@/hooks';
import { useCanvasSlice } from '@/store';

interface Props {
  className?: string;
}

export const CanvasField: React.FC<Props> = ({ className }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { canvas, setSelectedObject } = useCanvasSlice();
  const { canvasTransform } = useCanvasInteractions(containerRef);
  useInitCanvas(canvasRef);
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
