import { Circle, FabricObject } from 'fabric';

export function isCircle(obj: FabricObject): obj is Circle {
  return obj.type === 'ellipse';
}
