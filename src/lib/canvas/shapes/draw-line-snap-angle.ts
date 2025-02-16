import { Point } from 'fabric';

//привязка к прямым углам. Разброс по умолчанию: 5
export function drawLineSnapAngle(
  x_first: number,
  y_first: number,
  pointer: Point,
  spread: number = 5,
) {
  const angle = Math.round(
    (Math.atan2(pointer.x - x_first, pointer.y - y_first) * (180 / Math.PI) + 270) % 360,
  );
  x_first =
    (angle >= 90 - spread && angle <= 90 + spread) ||
    (angle >= 270 - spread && angle <= 270 + spread)
      ? x_first
      : pointer.x;
  y_first =
    angle >= 360 - spread || angle <= 0 + spread || (angle > 180 - spread && angle < 180 + spread)
      ? y_first
      : pointer.y;
  return { x_first, y_first };
}
