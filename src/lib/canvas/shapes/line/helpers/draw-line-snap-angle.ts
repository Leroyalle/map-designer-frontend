import { TPointerEvent, TPointerEventInfo } from 'fabric';

//привязка к прямым углам. Разброс по умолчанию: 5
export function drawLineSnapAngle(
  x_first: number,
  y_first: number,
  e: TPointerEventInfo<TPointerEvent>,
  spread: number = 5,
) {
  const angle = Math.round(
    (Math.atan2(e.pointer.x - x_first, e.pointer.y - y_first) * (180 / Math.PI) + 270) % 360,
  );
  x_first =
    (angle >= 90 - spread && angle <= 90 + spread) ||
    (angle >= 270 - spread && angle <= 270 + spread)
      ? x_first
      : e.pointer.x;
  y_first =
    angle >= 360 - spread || angle <= 0 + spread || (angle > 180 - spread && angle < 180 + spread)
      ? y_first
      : e.pointer.y;
  return { x_first, y_first };
}
