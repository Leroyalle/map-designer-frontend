'use client';
import { copyTextToClipboard, pasteTextFromClipboard, selectDrawShape } from '@/lib';
import { Canvas } from 'fabric';
import { RefObject, useEffect, useRef, useState } from 'react';

export const useKeyboardEvents = (
  activeButtonPressed: RefObject<KeyboardEvent['code'] | null>,
  isPanning: RefObject<boolean>,
  canvas: Canvas | null,
) => {
  const [isCtrlPressed, setIsCtrlPressed] = useState(false);
  const offset = useRef<number>(10);
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!canvas) return;
      activeButtonPressed.current = e.code;
      if (e.code === 'ControlLeft' && !isPanning.current) {
        setIsCtrlPressed(true);
      }
      if (e.code === 'Delete') {
        canvas.getActiveObjects().forEach((obj) => {
          canvas.remove(obj);
        });
        canvas.discardActiveObject();
        canvas.requestRenderAll();
      }

      if (e.code === 'KeyC' && isCtrlPressed && canvas) {
        offset.current = 10;
        const activeObjects = canvas.getActiveObjects();
        console.log(activeObjects[0]);
        if (activeObjects.length > 0) {
          const jsonString = JSON.stringify(
            activeObjects.map((obj) => {
              const { left, top } = obj.getBoundingRect();
              return {
                ...obj.toObject(),
                left,
                top,
              };
            }),
          );
          copyTextToClipboard(jsonString);
        }
      }

      if (e.code === 'KeyV' && isCtrlPressed && canvas) {
        (async () => {
          const clipboardText = await pasteTextFromClipboard();
          const parsedObjects = JSON.parse(clipboardText);
          for (const obj of parsedObjects) {
            const centerLeft =
              (obj.type === 'Image'
                ? (obj.width * obj.scaleX) / 2
                : obj.strokeWidth / 2 + obj.width / 2) + obj.left;
            const centerTop =
              (obj.type === 'Image'
                ? (obj.height * obj.scaleY) / 2
                : obj.strokeWidth / 2 + obj.height / 2) + obj.top;

            obj.left = centerLeft + offset.current;
            obj.top = centerTop + offset.current;

            const fabricObject = await selectDrawShape(
              obj.type.toLowerCase(),
              {
                x: centerLeft,
                y: centerTop,
              },
              obj,
            );

            if (fabricObject) {
              canvas.add(fabricObject);
            }
          }
          offset.current += 10;
        })();
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.code === 'ControlLeft') {
        setIsCtrlPressed(false);
      }
      activeButtonPressed.current = null;
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [canvas, isCtrlPressed, isPanning, activeButtonPressed]);

  return { isCtrlPressed };
};
