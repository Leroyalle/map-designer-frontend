// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Canvas, FabricObject } from 'fabric';

declare module 'fabric' {
  interface FabricObject {
    canvasId: string;
    name: string;
    desc: string;
    shortDesc: string;
    time: string;
    floor: number;
    link: string;
    imageUrl: string;
    placeColor: string;
    zIndex: number;
  }
}
