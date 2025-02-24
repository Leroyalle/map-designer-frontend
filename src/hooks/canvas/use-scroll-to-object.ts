'use client';
import { ProjectItem } from '@/types';
import { Canvas } from 'fabric';
import { useEffect, useRef } from 'react';

export const useScrollToObject = (
  canvas: Canvas | null,
  object: ProjectItem | null,
  zoomFactor = 1.2,
  isOpen: boolean,
) => {
  const isFirstMount = useRef(true);
  useEffect(() => {
    if (canvas && object) {
      const fabricObject = canvas.getObjects().find((obj) => obj.canvasId === object.canvasId);
      if (fabricObject) {
        const centerPoint = fabricObject.getCenterPoint();
        const objX = centerPoint.x;
        const objY = centerPoint.y;

        const vpt = canvas.viewportTransform;

        let newA = 0;
        let newD = 0;

        if (isFirstMount.current) {
          newA = zoomFactor;
          newD = zoomFactor;
          isFirstMount.current = false;
        } else {
          newA = vpt[0];
          newD = vpt[3];
        }

        const centerX = canvas.getWidth() / 2;
        const centerY = canvas.getHeight() / 2;

        const newE = centerX - newA * objX;
        const newF = centerY - newD * objY;

        vpt[0] = newA;
        vpt[3] = newD;
        vpt[4] = newE;
        vpt[5] = newF;

        canvas.requestRenderAll();
      }
      return () => console.log('red');
    }
  }, [canvas, object, zoomFactor, isOpen]);
};
