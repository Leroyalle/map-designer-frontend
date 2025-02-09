'use client';
import React, { useEffect, useRef, useState } from 'react';
import { Canvas as FabricCanvas } from 'fabric';
import clsx from 'clsx';
import { getCursorPositionRelativeToContainer } from '@/lib';

interface Props {
  className?: string;
}

export const CanvasWrapper: React.FC<Props> = ({ className }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [canvas, setCanvas] = useState<FabricCanvas | null>(null);
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

    if (!containerRef.current) return;

    const minScale = 0.4;
    const maxScale = 3;
    const sensitivity = 0.001;

    const currentTransform = containerRef.current.style.transform;
    const scaleMatch = currentTransform.match(/scale\(([\d.]+)\)/);
    const translateMatch = currentTransform.match(/translate\(([-\d.]+)px,\s*([-\d.]+)px\)/);
    const currentScale = parseFloat(scaleMatch?.[1] || '1');
    const currentX = parseFloat(translateMatch?.[1] || '0');
    const currentY = parseFloat(translateMatch?.[2] || '0');

    const { x: mouseX, y: mouseY } = getCursorPositionRelativeToContainer(e, containerRef.current);

    const rect = containerRef.current.getBoundingClientRect();
    const containerWidth = rect.width;
    const containerHeight = rect.height;

    const delta = e.deltaY * sensitivity;
    const newScale = Math.min(Math.max(currentScale * Math.pow(2, -delta), minScale), maxScale);

    const newTranslateX = currentX + (mouseX - containerWidth / 2) * (1 - newScale / currentScale);
    const newTranslateY = currentY + (mouseY - containerHeight / 2) * (1 - newScale / currentScale);

    setCanvasTransform({
      x: newTranslateX,
      y: newTranslateY,
      scale: newScale,
    });

    console.log(`Текущий масштаб: ${newScale.toFixed(2)}`);
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
    if (
      isPanning.current &&
      lastPosition.current &&
      isSpacePressed.current &&
      containerRef.current
    ) {
      const deltaX = e.clientX - lastPosition.current.x;
      const deltaY = e.clientY - lastPosition.current.y;

      setCanvasTransform((prevTransform) => ({
        ...prevTransform,
        x: prevTransform.x + deltaX,
        y: prevTransform.y + deltaY,
      }));

      lastPosition.current = { x: e.clientX, y: e.clientY };
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

  return (
    <div className={clsx('w-fit p-4 select-none', className)} ref={containerRef}>
      <canvas id="canvas" ref={canvasRef} />
    </div>
  );
};
