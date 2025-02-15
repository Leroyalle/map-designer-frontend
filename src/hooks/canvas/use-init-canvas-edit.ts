'use client';
import { RefObject, useEffect, useState } from 'react';
import { Canvas as FabricCanvas, FabricImage } from 'fabric';
import { useCanvasSlice } from '@/store';
import { ProjectWithItems } from '@/types';
import { getAbsoluteUrl, renderItemsOnCanvas } from '@/lib';

export const useInitCanvasEdit = (
  canvasRef: RefObject<HTMLCanvasElement | null>,
  data: ProjectWithItems,
) => {
  const { canvas, setCanvas } = useCanvasSlice();
  const [image, setImage] = useState<FabricImage | null>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const initCanvas = new FabricCanvas(canvasRef.current, {
        width: data.canvasWidth,
        height: data.canvasHeight,
      });
      initCanvas.backgroundColor = 'white';

      const image = new Image();
      image.src = getAbsoluteUrl(data.imageUrl);

      image.addEventListener('load', () => {
        const fabricImage = new FabricImage(image, {
          selectable: false,
          name: 'background',
        });
        initCanvas.add(fabricImage);
        initCanvas.sendObjectToBack(fabricImage);
        setImage(fabricImage);
      });
      initCanvas.renderAll();
      renderItemsOnCanvas(initCanvas, data.items);
      setCanvas(initCanvas);

      return () => {
        initCanvas.dispose();
      };
    }
  }, [canvasRef, setCanvas]);

  useEffect(() => {
    if (canvas && image) {
      canvas.setWidth(image.width || data.canvasWidth);
      canvas.setHeight(image.height || data.canvasHeight);
    }
  }, [image, canvas, data.canvasHeight, data.canvasWidth]);
};
