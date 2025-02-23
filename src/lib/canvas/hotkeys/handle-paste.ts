import { pasteTextFromClipboard, selectDrawShape } from '@/lib';
import { Canvas } from 'fabric';
import { RefObject } from 'react';

export const handlePaste = async (canvas: Canvas, offset: RefObject<number>) => {
  try {
    const clipboardText = await pasteTextFromClipboard();
    if (!clipboardText) return;
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
        canvas,
        obj,
      );
      if (fabricObject) {
        canvas.add(fabricObject);
      }
    }
    offset.current += 10;
  } catch (err) {
    console.warn('Вставленный текст не является объектом', err);
  }
};
