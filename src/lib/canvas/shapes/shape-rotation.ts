import { BasicTransformEvent, Canvas, FabricObject, TPointerEvent } from 'fabric';

// функция для вращения фигуры с привязкой к прямомым углам при нажатом ctrl
export function shapeRotation(
  e: BasicTransformEvent<TPointerEvent> & {
    target: FabricObject;
  },
  isCtrlPressed: boolean,
  canvas: Canvas,
) {
  if (isCtrlPressed) {
    const allowedAngles = [0, 45, 90, 135, 180, 225, 270, 315];
    const object = e.target;
    const currentAngle = object.angle % 360;
    const closestAngle = allowedAngles.reduce((prev, curr) => {
      return Math.abs(curr - currentAngle) < Math.abs(prev - currentAngle) ? curr : prev;
    });
    object.set({
      angle: closestAngle,
    });

    canvas.renderAll();
  }
}
