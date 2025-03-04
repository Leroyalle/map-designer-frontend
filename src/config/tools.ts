import { ShapeType } from '@/types';

export type ToolConfig = {
  type?: ShapeType;
  image?: string;
  name?: string;
  shortcut?: string;
  options?: object;
  toolColection?: ToolConfig[];
};

export const imageSources: Record<string, string> = {
  door: '/img/shapes/door-shape.png',
  ladder: '/img/shapes/ladder-shape.png',
  elevator: '/img/shapes/elevator-shape.png',
  window: '/img/shapes/window-shape.png',
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

export const HISTORY_TOOLS: ToolConfig[] = [
  {
    image: '/img/tool-icons/helpers/arrow-left.svg',
    type: 'tool-undo',
  },
  {
    image: '/img/tool-icons/helpers/arrow-right.svg',
    type: 'tool-redo',
  },
];

export const CONTROL_TOOLS: ToolConfig[] = [
  {
    image: '/img/tool-icons/helpers/chevron.svg',
    type: 'selector-tool',
  },
  {
    image: '/img/tool-icons/helpers/hand.svg',
    type: 'move-tool',
  },
];

export const MAIN_TOOL_LIST: ToolConfig[] = [
  {
    toolColection: META_SHAPES,
  },
  {
    toolColection: FACILITIES,
  },
  {
    toolColection: SHAPES,
  },
  {
    image: '/img/tool-icons/bottom-icons/spot.svg',
    type: 'spot',
  },
  {
    image: '/img/tool-icons/bottom-icons/hydrant.svg',
    type: 'hydrant',
  },
];
