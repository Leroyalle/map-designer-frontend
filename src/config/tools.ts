import { Canvas, Line, TPointerEvent, TPointerEventInfo } from 'fabric';
import { ShapeFactory } from '../lib/canvas/shapes/shape-factory';
import { drawLineFirstPoint, drawLineMouseMove, drawLineSecondPoint } from '@/lib';

export type ToolConfig = {
  id: string;
  image: string;
  name: string;
  createHandler: (canvas: Canvas) => void;
  shortcut?: string;
  options?: object;
};

export const SHAPE_TOOLS: ToolConfig[] = [
  {
    id: 'rectangle',
    image: '/img/tool-icons/figures/rectangle.svg',
    name: 'Прямоугольник',
    createHandler: (canvas) => {
      ShapeFactory.createRect(canvas, {
        width: 100,
        height: 100,
        fill: 'transparent',
        stroke: 'black',
        strokeWidth: 2,
      });
    },
    shortcut: 'KeyR',
  },
  {
    id: 'circle',
    image: '/img/tool-icons/figures/round.svg',
    name: 'Круг',
    createHandler: (canvas) => {
      ShapeFactory.createCircle(canvas, {
        radius: 50,
        fill: 'transparent',
        stroke: 'black',
        strokeWidth: 2,
      });
    },
    shortcut: 'KeyC',
  },
  {
    id: 'free-line',
    image: '/img/tool-icons/figures/free-figure.svg',
    name: 'Произвольная фигура',
    createHandler: (canvas) => {
      let lastMouseEvent: TPointerEventInfo<TPointerEvent> | null = null;
      let tempLine: Line | null = null;
      let point1_x: number = 0;
      let point1_y: number = 0;

      let isCtrlPressed = false;

      const handleMouseDown = (e: TPointerEventInfo<TPointerEvent>) => {
        drawLineFirstPoint(e, point1_x, point1_y, tempLine, canvas);
        const result = drawLineFirstPoint(e, point1_x, point1_y, tempLine, canvas);
        if (result) {
          point1_x = result.point1_x;
          point1_y = result.point1_y;
          tempLine = result.tempLine;
        }
      };

      const handleMouseMove = (e: TPointerEventInfo<TPointerEvent>) => {
        lastMouseEvent = e;
        drawLineMouseMove(e, tempLine, isCtrlPressed, canvas, point1_x, point1_y);
      };

      const handleMouseUp = (e: TPointerEventInfo<TPointerEvent>) => {
        if (!tempLine) return;
        canvas.remove(tempLine);
        tempLine = null;

        drawLineSecondPoint(e, canvas, point1_x, point1_y, isCtrlPressed);
      };

      document.addEventListener('keydown', (e) => {
        if (e.ctrlKey) {
          isCtrlPressed = true;
          if (tempLine && lastMouseEvent) {
            handleMouseMove(lastMouseEvent);
          }
        }
      });

      document.addEventListener('keyup', (e) => {
        if (!e.ctrlKey) {
          isCtrlPressed = false;
          if (tempLine && lastMouseEvent) {
            handleMouseMove(lastMouseEvent);
          }
        }
      });

      canvas.on('mouse:down', handleMouseDown);

      canvas.on('mouse:up', handleMouseUp);

      canvas.on('mouse:move', handleMouseMove);
    },

    shortcut: 'KeyC',
  },
];
