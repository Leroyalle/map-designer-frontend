import { ProjectItem } from '@/types';
import { Canvas, Rect, Circle } from 'fabric';

export const renderItemsOnCanvas = (canvas: Canvas, items: ProjectItem[]) => {
  if (!items || !Array.isArray(items)) return;

  items.forEach((item) => {
    console.log('items:', items);
    let fabricObject;

    switch (item.type) {
      case 'rect':
        fabricObject = new Rect({
          canvasId: item.canvasId,
          name: item.name,
          desc: item.desc,
          shortDesc: item.shortDesc,
          time: item.time,
          floor: item.floor,
          link: item.link,
          width: item.width,
          height: item.height,
          radius: item.radius ?? undefined,
          backgroundColor: item.backgroundColor,
          strokeWidth: item.strokeWidth,
          fill: item.fill,
          left: item.left,
          top: item.top,
          angle: item.angle,
          scaleX: item.scaleX,
          scaleY: item.scaleY,
        });
        break;

      case 'circle':
        console.log('CREATE CIRCLE');
        fabricObject = new Circle({
          canvasId: item.canvasId,
          name: item.name,
          desc: item.desc,
          shortDesc: item.shortDesc,
          time: item.time,
          floor: item.floor,
          link: item.link,
          width: item.width,
          height: item.height,
          radius: item.radius ?? undefined,
          backgroundColor: item.backgroundColor,
          strokeWidth: item.strokeWidth,
          fill: item.fill,
          left: item.left,
          top: item.top,
          angle: item.angle,
          scaleX: item.scaleX,
          scaleY: item.scaleY,
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
