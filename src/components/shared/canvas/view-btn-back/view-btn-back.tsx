'use client';
import { useCanvasSlice } from '@/store';
import React from 'react';

interface Props {
  setIsBack: (value: boolean) => void;
}
export const ViewBtnBack: React.FC<Props> = ({ setIsBack }) => {
  const canvas = useCanvasSlice((state) => state.canvas);
  if (!canvas) return;
  const moveToCenter = () => {
    setIsBack(false);

    const objects = canvas.getObjects();
    if (objects.length === 0) return;

    let totalLeft = 0;
    let totalTop = 0;

    objects.forEach((obj) => {
      totalLeft += obj.left || 0;
      totalTop += obj.top || 0;
    });

    const centerX = totalLeft / objects.length;
    const centerY = totalTop / objects.length;

    canvas.setZoom(1);
    const zoom = canvas.getZoom();
    const viewportTransform = canvas.viewportTransform;
    viewportTransform[4] = canvas.width! / 2 - centerX * zoom;
    viewportTransform[5] = canvas.height! / 2 - centerY * zoom;
    canvas.setViewportTransform(viewportTransform);
    canvas.renderAll();
  };
  return (
    <div className="absolute bottom-7 left-0 right-0 text-center select-none">
      <span
        onClick={moveToCenter}
        className="border-[0.5px] border-gray cursor-pointer rounded-[8px] text-sm py-2.5 px-4 hover:bg-blue-300/15 hover:border-transparent">
        Вернуться к содержимому
      </span>
    </div>
  );
};
