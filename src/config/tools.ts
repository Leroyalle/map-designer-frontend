import { Canvas, Line, TPointerEvent, TPointerEventInfo, Rect } from 'fabric';
import { ShapeFactory } from '../lib/canvas/shapes/shape-factory';
import { createLineHandler } from '@/lib';

export type ToolConfig = {
  id: string;
  image: string;
  name: string;
  createHandler: (canvas: Canvas) => void;
  shortcut?: string;
  options?: object;
};

export interface lineState {
  startpoint: { x: number; y: number };
  tempLine: Line | null;
  isCtrlPressed: boolean;
}

export const SHAPE_TOOLS: ToolConfig[] = [
  {
    id: 'rectangle',
    image: '/img/tool-icons/figures/rectangle.svg',
    name: 'Прямоугольник',
    createHandler: (canvas) => {
      let point1_x: number = 0;
      let point1_y: number = 0;
      let rect: Rect | null = null;

      const handleMouseDown = (e: TPointerEventInfo<TPointerEvent>) => {
        canvas.selection = false;
        point1_x = e.pointer.x;
        point1_y = e.pointer.y;
        rect = ShapeFactory.createRect({
          left: point1_x,
          top: point1_y,
          height: 10,
          width: 10,
        });
        canvas.add(rect);
      };

      const handleMouseMove = (e: TPointerEventInfo<TPointerEvent>) => {
        if (!e.pointer || !rect) return;

        rect.setCoords();
        canvas.renderAll();
      };
      const handleMouseUp = (e: TPointerEventInfo<TPointerEvent>) => {
        console.log(e);
      };
      // ShapeFactory.createRect(canvas, {
      //   width: 100,
      //   height: 100,
      //   fill: 'transparent',
      //   stroke: 'black',
      //   strokeWidth: 2,
      // });
      canvas.on('mouse:down', handleMouseDown);
      canvas.on('mouse:up', handleMouseUp);
      canvas.on('mouse:move', handleMouseMove);
    },
    shortcut: 'KeyR',
  },
  {
    id: 'circle',
    image: '/img/tool-icons/figures/round.svg',
    name: 'Круг',
    createHandler: (canvas) => {
      console.log(canvas);
      ShapeFactory.createCircle({
        radius: 50,
      });
    },
    shortcut: 'KeyC',
  },
  {
    id: 'free-line',
    image: '/img/tool-icons/figures/free-figure.svg',
    name: 'Произвольная фигура',
    createHandler: createLineHandler,

    shortcut: 'KeyC',
  },
];
