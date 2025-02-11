import React, { useEffect, useRef, useState } from 'react';
import { Canvas as FabricCanvas } from 'fabric';
import clsx from 'clsx';
import { handleMove, handleZoom, shapeRotation } from '@/lib';
import { useCanvasSlice } from '@/store';

interface Props {
  className?: string;
}

export const CanvasField: React.FC<Props> = ({ className }) => {
  const { setCanvas, canvas } = useCanvasSlice();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isPanning = useRef(false);
  const isSpacePressed = useRef(false);
  const lastPosition = useRef<{ x: number; y: number } | null>(null);
  const [canvasTransform, setCanvasTransform] = useState({
    scale: 1,
    x: 0,
    y: 0,
  });

  const handleWheel = (e: WheelEvent) => {
    e.preventDefault();
    if (containerRef.current) {
      handleZoom(e, containerRef.current, setCanvasTransform);
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.code === 'Space' && !isPanning.current && canvasRef.current) {
      isSpacePressed.current = true;
    }
  };

  const handleKeyUp = (e: KeyboardEvent) => {
    if (e.code === 'Space' && canvasRef.current) {
      isSpacePressed.current = false;
    }
  };

  const handleMouseDown = (e: MouseEvent) => {
    if (isSpacePressed.current) {
      isPanning.current = true;
      lastPosition.current = { x: e.clientX, y: e.clientY };
    }
  };

  const handleMouseUp = () => {
    isPanning.current = false;
    lastPosition.current = null;
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isPanning.current && isSpacePressed.current && containerRef.current) {
      handleMove(e, setCanvasTransform, lastPosition);
    }
  };
  useEffect(() => {
    if (!containerRef.current) return;
    containerRef.current.style.transform = `translate(${canvasTransform.x}px, ${canvasTransform.y}px) scale(${canvasTransform.scale})`;
  }, [canvasTransform]);

  useEffect(() => {
    if (canvasRef.current && containerRef.current) {
      const initCanvas = new FabricCanvas(canvasRef.current, {
        width: 1000,
        height: 500,
      });
      initCanvas.backgroundColor = 'white';
      initCanvas.renderAll();
      setCanvas(initCanvas);

      window.addEventListener('keydown', handleKeyDown);
      window.addEventListener('keyup', handleKeyUp);
      window.addEventListener('wheel', handleWheel, { passive: false });
      document.addEventListener('mousedown', handleMouseDown);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('mousemove', handleMouseMove);

      return () => {
        initCanvas.dispose();
        window.removeEventListener('keydown', handleKeyDown);
        window.removeEventListener('keyup', handleKeyUp);
        window.removeEventListener('wheel', handleWheel);
        document.removeEventListener('mousedown', handleMouseDown);
        document.removeEventListener('mouseup', handleMouseUp);
        document.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, []);
  React.useEffect(() => {
    if (!canvas) return;
    canvas.on('object:rotating', (e) => {
      let isCtrlPressed = false;
      document.addEventListener('keydown', (e) => {
        if (e.ctrlKey) {
          isCtrlPressed = true;
          console.log('first');
        }
      });
      document.addEventListener('keyup', (e) => {
        if (e.ctrlKey) {
          isCtrlPressed = false;
          console.log('seeeaweqwe12');
        }
      });
      shapeRotation(e, isCtrlPressed, canvas);
    });
  }, [canvas]);

  return (
    <div className={clsx('w-fit p-4 select-none', className)} ref={containerRef}>
      <canvas id="canvas" ref={canvasRef} />
    </div>
  );
};
