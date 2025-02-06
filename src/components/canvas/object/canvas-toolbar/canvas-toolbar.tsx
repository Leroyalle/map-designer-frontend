import React from 'react';
import { BottomTools, ToolBlock } from './components';
import { cn } from '@/lib';

interface Props {
  className?: string;
}

const doorsAndWindowsTools = [
  { image: '/images/tool-icons/door.svg', toolName: 'Двери' },
  { image: '/images/tool-icons/window.svg', toolName: 'Окна' },
];

const objectsTools = [
  { image: '/images/tool-icons/rectangle.svg', toolName: 'Прямоугольник' },
  { image: '/images/tool-icons/round.svg', toolName: 'Круг' },
  { image: '/images/tool-icons/free-figure.svg', toolName: 'Произвольная фигура' },
];

const facilitiesTools = [
  { image: '/images/tool-icons/stairs.svg', toolName: 'Лестница' },
  { image: '/images/tool-icons/elevator.svg', toolName: 'Лифт' },
];

const controlTools = [
  { toolImage: '/images/tool-icons/chevron.svg' },
  { toolImage: '/images/tool-icons/hand.svg' },
];

const mainTools = [
  { toolImage: '/images/tool-icons/bricks.svg' },
  {
    toolImage: '/images/tool-icons/door.svg',
    toolColection: [
      { toolImage: '/images/tool-icons/window.svg' },
      { toolImage: '/images/tool-icons/door.svg' },
    ],
  },
  { toolImage: '/images/tool-icons/stairs.svg' },
  {
    toolImage: '/images/tool-icons/rectangle.svg',
    toolColection: [
      { toolImage: '/images/tool-icons/rectangle.svg' },
      { toolImage: '/images/tool-icons/round.svg' },
      { toolImage: '/images/tool-icons/free-figure.svg' },
    ],
  },
  { toolImage: '/images/tool-icons/spot.svg' },
  { toolImage: '/images/tool-icons/hand.svg' },
];

const historyTools = [
  { toolImage: '/images/tool-icons/arrow-left.svg' },
  { toolImage: '/images/tool-icons/arrow-right.svg' },
];

export const CanvasToolbar: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn('flex flex-col gap-8 items-center', className)}>
      <div className={'flex gap-7 items-end'}>
        <ToolBlock title="Двери и окна" tools={doorsAndWindowsTools} />
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
