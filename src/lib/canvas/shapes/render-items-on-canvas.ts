import { ProjectItem } from '@/types';
import { Canvas, Rect, Circle } from 'fabric';

export const renderItemsOnCanvas = (canvas: Canvas, items: ProjectItem[]) => {
  if (!items || !Array.isArray(items)) return;

  items.forEach((item) => {
    let fabricObject;

    switch (item.type) {
      case 'rect':
        fabricObject = new Rect({
          ...item,
        });
        break;

      case 'ellipse':
        fabricObject = new Circle({
          ...item,
          radius: item.radius ?? undefined,
        });
        break;

      // case 'text':
      //   fabricObject = new fabric.Text(item.text, {
      //     ...item,
      //   });
      //   break;

      default:
        console.warn(`Неизвестный тип объекта: ${item.type}`);
        return;
    }

    canvas.add(fabricObject);
  });

  canvas.renderAll();
};
