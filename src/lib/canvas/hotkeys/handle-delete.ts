import { Canvas } from 'fabric';

export const handleDelete = (canvas: Canvas) => {
  const activeObj = canvas.getActiveObjects();
  console.log(activeObj);

  activeObj.forEach((obj) => {
    if (obj.type === 'group') {
      canvas._objects.forEach((groupObj) => {
        if (groupObj.name === obj.name) {
          canvas.remove(groupObj);
        }
      });
    }
    canvas.remove(obj);
  });
  canvas.discardActiveObject();
  canvas.renderAll();
};
