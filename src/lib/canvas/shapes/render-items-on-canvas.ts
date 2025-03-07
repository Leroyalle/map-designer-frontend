import { ProjectItem } from '@/types';
import { Canvas, Ellipse, FabricImage, Rect } from 'fabric';

export const renderItemsOnCanvas = (canvas: Canvas, items: ProjectItem[]) => {
  if (!items || !Array.isArray(items)) return;

  items.forEach((item) => {
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
          placeColor: item.placeColor,
          width: item.width,
          height: item.height,
          stroke: item.stroke,
          strokeWidth: item.strokeWidth,
          fill: item.fill,
          left: item.left,
          top: item.top,
          originX: item.originX,
          originY: item.originY,
          angle: item.angle,
          scaleX: item.scaleX,
          scaleY: item.scaleY,
        });
        break;

      case 'ellipse':
        fabricObject = new Ellipse({
          canvasId: item.canvasId,
          originX: item.originX,
          originY: item.originY,
          name: item.name,
          desc: item.desc,
          shortDesc: item.shortDesc,
          time: item.time,
          floor: item.floor,
          link: item.link,
          placeColor: item.placeColor,
          width: item.width,
          rx: item.width ? item.width / 2 : 50,
          ry: item.height ? item.height / 2 : 30,
          height: item.height,
          stroke: item.stroke,
          strokeWidth: item.strokeWidth,
          fill: item.fill,
          left: item.left,
          top: item.top,
          angle: item.angle,
          scaleX: item.scaleX,
          scaleY: item.scaleY,
        });
        break;

      case 'image':
        if (item.imageUrl) {
          FabricImage.fromURL(item.imageUrl, { crossOrigin: 'anonymous' })
            .then((img) => {
              img.set({
                canvasId: item.canvasId,
                name: item.name,
                originX: item.originX,
                originY: item.originY,
                desc: item.desc,
                shortDesc: item.shortDesc,
                time: item.time,
                floor: item.floor,
                link: item.link,
                placeColor: item.placeColor,
                width: item.width,
                height: item.height,
                stroke: item.stroke,
                strokeWidth: item.strokeWidth,
                fill: item.fill,
                left: item.left,
                top: item.top,
                angle: item.angle,
                scaleX: item.scaleX,
                scaleY: item.scaleY,
              });

              canvas.add(img);
              canvas.renderAll();
            })
            .catch((error) => {
              console.error('Ошибка загрузки изображения:', error);
            });
        }
        return;
    }

    if (fabricObject) {
      canvas.add(fabricObject);
    }
  });

  canvas.renderAll();
};
