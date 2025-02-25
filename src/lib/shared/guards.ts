import { Circle, FabricImage, FabricObject } from 'fabric';

export function isCircle(obj: FabricObject): obj is Circle {
  return obj.type === 'ellipse';
}

export function isImage(obj: FabricObject): obj is FabricImage & { _element?: HTMLImageElement } {
  return obj.type === 'image';
}
