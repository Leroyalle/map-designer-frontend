export type ToolConfig = {
  id: string;
  image: string;
  name: string;
  // createHandler: (canvas: Canvas) => void;
  shortcut?: string;
  options?: object;
};

export const SHAPE_TOOLS: ToolConfig[] = [
  {
    id: 'rectangle',
    image: '/img/tool-icons/figures/rectangle.svg',
    name: 'Прямоугольник',
    // createHandler: (canvas) => {
    //   console.log('first')
    //   },

    shortcut: 'KeyR',
  },
  {
    id: 'circle',
    image: '/img/tool-icons/figures/round.svg',
    name: 'Круг',
    // createHandler: (canvas) => {
    //   ShapeFactory.createCircle({
    //     name: generateFrameName(canvas),
    //     radius: 50,
    //   });
    // },
    shortcut: 'KeyC',
  },
  {
    id: 'free-line',
    image: '/img/tool-icons/figures/free-figure.svg',
    name: 'Произвольная фигура',

    shortcut: 'KeyC',
    // createHandler: createLineHandler,
  },
];
