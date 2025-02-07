import React from 'react';
import { BottomTools, ToolBlock } from './components';
import { cn } from '@/lib';

interface Props {
  className?: string;
}

const buildTools = [
  { image: '/img/tool-icons/build-elements/door.svg', toolName: 'Двери' },
  { image: '/img/tool-icons/build-elements/window.svg', toolName: 'Окна' },
];

const objectsTools = [
  { image: '/img/tool-icons/figures/rectangle.svg', toolName: 'Прямоугольник' },
  { image: '/img/tool-icons/figures/round.svg', toolName: 'Круг' },
  { image: '/img/tool-icons/figures/free-figure.svg', toolName: 'Произвольная фигура' },
];

const facilitiesTools = [
  { image: '/img/tool-icons/build-elements/facilities/stairs.svg', toolName: 'Лестница' },
  { image: '/img/tool-icons/build-elements/facilities/elevator.svg', toolName: 'Лифт' },
];

const controlTools = [
  { toolImage: '/img/tool-icons/helpers/chevron.svg' },
  { toolImage: '/img/tool-icons/helpers/hand.svg' },
];

const mainTools = [
  { toolImage: '/img/tool-icons/bottom-icons/bricks.svg' },
  {
    toolColection: [
      { toolImage: '/img/tool-icons/build-elements/door.svg' },
      { toolImage: '/img/tool-icons/build-elements/window.svg' },
    ],
  },
  { toolImage: '/img/tool-icons/build-elements/facilities/stairs.svg' },
  {
    toolColection: [
      { toolImage: '/img/tool-icons/figures/rectangle.svg' },
      { toolImage: '/img/tool-icons/figures/round.svg' },
      { toolImage: '/img/tool-icons/figures/free-figure.svg' },
    ],
  },
  { toolImage: '/img/tool-icons/bottom-icons/spot.svg' },
  { toolImage: '/img/tool-icons/bottom-icons/hydrant.svg' },
];

const historyTools = [
  { toolImage: '/img/tool-icons/helpers/arrow-left.svg' },
  { toolImage: '/img/tool-icons/helpers/arrow-right.svg' },
];

export const CanvasToolbar: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn('flex flex-col gap-8 items-center', className)}>
      <div className={'flex gap-7 items-end'}>
        <ToolBlock title="Двери и окна" tools={buildTools} />
        <ToolBlock title="Обьекты" tools={objectsTools} />
        <ToolBlock title="Удобства" tools={facilitiesTools} />
      </div>
      <div className="flex gap-4">
        <BottomTools toolList={controlTools} />
        <BottomTools toolList={mainTools} />
        <BottomTools toolList={historyTools} />
      </div>
    </div>
  );
};
