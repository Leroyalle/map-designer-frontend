import { ShapeType } from '@/types';

export type ToolConfig = {
  type: ShapeType;
  image: string;
  name: string;
  shortcut?: string;
  options?: object;
};
export const imageSources: Record<string, string> = {
  door: '/img/shapes/door-shape.png',
  ladder: '/img/shapes/ladder-shape.png',
  elevator: '/img/shapes/elevator-shape.png',
  window: '/img/shapes/door-shape.png',
};

export const SHAPES: ToolConfig[] = [
  {
    type: 'rect',
    image: '/img/tool-icons/figures/rectangle.svg',
    name: 'Прямоугольник',
    shortcut: 'KeyR',
  },
  {
    type: 'ellipse',
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

export const META_SHAPES: ToolConfig[] = [
  {
    type: 'door',
    image: '/img/tool-icons/build-elements/door.svg',
    name: 'Двери',
    shortcut: 'KeyR',
  },
  {
    type: 'window',
    image: '/img/tool-icons/build-elements/window.svg',
    name: 'Окна',
    shortcut: 'KeyC',
  },
];

export const FACILITIES: ToolConfig[] = [
  {
    type: 'ladder',
    image: '/img/tool-icons/build-elements/facilities/stairs.svg',
    name: 'Лестница',
    shortcut: 'KeyR',
  },
  {
    type: 'elevator',
    image: '/img/tool-icons/build-elements/facilities/elevator.svg',
    name: 'Лифт',
    shortcut: 'KeyC',
  },
];
