import { Canvas, Line, Circle } from 'fabric';
import { ShapeFactory } from '../lib/canvas/shapes/shape-factory';

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
        moveCursor: 'grab',
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
        moveCursor: 'grab',
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
      const radius = 4;

      let isDrawing = false;
      let pointer1: Circle | null = null;
      let pointer2: Circle | null = null;
      let tempLine: Line | null = null;
      let finalLine: Line | null = null;

      canvas.on('mouse:down', (e) => {
        if (!e.pointer) return;

        isDrawing = true;
        canvas.selection = false;

        const point1_x = e.pointer.x;
        const point1_y = e.pointer.y;
        pointer1 = new Circle({
          radius,
          id: 'circlePointer1',
          fill: '#fafafa',
          stroke: 'black',
          strokeWidth: 0.5,
          left: point1_x,
          top: point1_y,
          originX: 'center',
          originY: 'center',
          hasBorders: false,
          hasControls: false,
          lockScalingX: true,
          lockScalingY: true,
          visible: false,
        });
        canvas.add(pointer1);

        tempLine = new Line([point1_x, point1_y, point1_x, point1_y], {
          id: 'tempLine',
          stroke: 'black',
          strokeWidth: 2,
          fill: null,
          hasBorders: false,
          hasControls: false,
          lockMovementX: true,
          lockMovementY: true,
          lockScalingX: true,
          lockScalingY: true,
        });
        canvas.add(tempLine);
      });

      canvas.on('mouse:move', (e) => {
        if (!isDrawing || !e.pointer || !pointer1 || !tempLine) return;

        tempLine.set({
          x2: e.pointer.x,
          y2: e.pointer.y,
        });
        tempLine.setCoords();
        canvas.renderAll();
      });

      canvas.on('mouse:up', (e) => {
        if (!isDrawing || !e.pointer || !pointer1 || !tempLine) return;
        canvas.selection = true;

        isDrawing = false;

        const point2_x = e.pointer.x;
        const point2_y = e.pointer.y;
        pointer2 = new Circle({
          radius,
          id: 'circlePointer2',
          fill: '#fafafa',
          stroke: 'black',
          strokeWidth: 0.5,
          left: point2_x,
          top: point2_y,
          originX: 'center',
          originY: 'center',
          hasBorders: false,
          hasControls: false,
          lockScalingX: true,
          lockScalingY: true,
        });
        pointer1.visible = true;
        canvas.add(pointer2);

        finalLine = new Line([pointer1.left, pointer1.top, point2_x, point2_y], {
          id: 'line',
          stroke: 'black',
          strokeWidth: 2,
          fill: null,
          hasBorders: false,
          hasControls: false,
          lockMovementX: true,
          lockMovementY: true,
          lockScalingX: true,
          lockScalingY: true,
        });
        canvas.add(finalLine);
        canvas.selection = true;

        canvas.remove(tempLine);
        tempLine = null;

        canvas.on('object:moving', movingLine);

        canvas.on('selection:created', handleObjectSelected);
        canvas.on('selection:cleared', handleSelectionCleared);

        canvas.off('mouse:down');
      });

      function movingLine(e: any) {
        const target = e.target;
        if (target && target.id && target.id.startsWith('circlePointer')) {
          const line = canvas.getObjects().find((obj) => obj.id === 'line') as Line;
          if (line) {
            if (target.id === 'circlePointer1') {
              line.set({
                x1: target.left,
                y1: target.top,
              });
            } else if (target.id === 'circlePointer2') {
              line.set({
                x2: target.left,
                y2: target.top,
              });
            }
            line.setCoords();
          }
        }
      }

      function handleObjectSelected(e: any) {
        console.log('selected', e);
        const selectedObject = e.target;
        if (selectedObject && selectedObject.id === 'line') {
          pointer1?.set({ visible: true });
          pointer2?.set({ visible: true });
          canvas.renderAll();
        }
      }

      function handleSelectionCleared() {
        console.log('cleared');

        pointer1?.set({ visible: false });
        pointer2?.set({ visible: false });
        canvas.renderAll();
      }
    },

    shortcut: 'KeyC',
  },
];
