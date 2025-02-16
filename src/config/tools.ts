import { ShapeType } from '@/types';

export type ToolConfig = {
  type: ShapeType;
  image: string;
  name: string;
  shortcut?: string;
  options?: object;
};

export const SHAPE_TOOLS: ToolConfig[] = [
  {
    type: 'rect',
    image: '/img/tool-icons/figures/rectangle.svg',
    name: 'Прямоугольник',
    shortcut: 'KeyR',
  },
  {
    type: 'circle',
    image: '/img/tool-icons/figures/round.svg',
    name: 'Круг',
    shortcut: 'KeyC',
  },
  {
    type: 'line',
    image: '/img/tool-icons/figures/free-figure.svg',
    name: 'Произвольная фигура',
    shortcut: 'KeyL',
  },
];
