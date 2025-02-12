import { Canvas } from 'fabric';
import { ShapeFactory } from '../lib/canvas/shapes/shape-factory';
import { generateFrameName } from '@/lib';

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
        fill: '#FF3D00',
        name: generateFrameName(canvas),
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
        fill: '#FF3D00',
        name: generateFrameName(canvas),
      });
    },
    shortcut: 'KeyC',
  },
];
