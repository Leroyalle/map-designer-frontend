import React from 'react';
import { BottomTools, ToolBlock } from './components';
import { cn } from '@/lib';
import { FACILITIES, META_SHAPES, SHAPES } from '@/config';

interface Props {
  className?: string;
}

// const buildTools = [
//   { image: '/img/tool-icons/build-elements/door.svg', name: 'Двери' },
//   { image: '/img/tool-icons/build-elements/window.svg', name: 'Окна' },
// ];

// const facilitiesTools = [
//   { image: '/img/tool-icons/build-elements/facilities/stairs.svg', name: 'Лестница' },
//   { image: '/img/tool-icons/build-elements/facilities/elevator.svg', name: 'Лифт' },
// ];

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
    <div className={cn('flex flex-col gap-3 items-center', className)}>
      <div className={'flex gap-3 items-end'}>
        <ToolBlock title="Двери и окна" tools={META_SHAPES} />
        <ToolBlock title="Обьекты" tools={SHAPES} />
        <ToolBlock title="Удобства" tools={FACILITIES} />
      </div>
      <div className="flex gap-3">
        <BottomTools toolList={controlTools} />
        <BottomTools toolList={mainTools} />
        <BottomTools toolList={historyTools} />
      </div>
    </div>
  );
};
