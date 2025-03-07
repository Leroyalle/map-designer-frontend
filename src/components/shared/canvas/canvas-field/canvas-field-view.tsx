import React, { useState, useRef } from 'react';
import { useCanvasEvents, useInitCanvasView } from '@/hooks';
import { useCanvasSlice } from '@/store';
import { ProjectWithItems } from '@/types';
import { cn } from '@/lib';
import { PlacesList } from '../places-list';
import { ViewBtnBack } from '../view-btn-back';

interface Props {
  project: ProjectWithItems;
  className?: string;
}

export const CanvasFieldView: React.FC<Props> = ({ project, className }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isBack, setIsBack] = useState(false);
  const { canvas, setSelectedObject } = useCanvasSlice();

  useInitCanvasView(canvasRef, project);

  useCanvasEvents(
    canvas,
    (object) => {
      setSelectedObject(object);
    },
    true,
    setIsBack,
  );
  React.useEffect(() => {
    // console.log(isBack);
  }, [isBack]);

  return (
    <div className={cn('view-mode', className)}>
      <PlacesList items={project.items} className="fixed left-2 top-1/2 -translate-y-1/2 z-50" />
      <canvas id="canvas" ref={canvasRef} />
      {isBack && <ViewBtnBack setIsBack={setIsBack} />}
    </div>
  );
};
