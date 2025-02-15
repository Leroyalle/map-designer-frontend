import React from 'react';
import { CanvasToolbar } from './canvas-toolbar';
import { CanvasSettings } from './canvas-settings';
import { ObjectParams } from './object';
import { ProjectWithItems } from '@/types';
import { CanvasFieldEdit, CanvasFieldView } from './canvas-field';

interface Props {
  isWatchMode?: boolean;
  project: ProjectWithItems;
  className?: string;
}

export const CanvasMode: React.FC<Props> = ({ isWatchMode, project }) => {
  if (isWatchMode) {
    return <CanvasFieldView project={project} />;
  }

  return (
    <>
      <CanvasSettings data={project} className="fixed top-1/2 left-3 -translate-y-1/2 z-50" />
      <CanvasFieldEdit project={project} />
      <CanvasToolbar className="fixed bottom-3 left-1/2 -translate-x-1/2 z-50" />
      <ObjectParams className="fixed right-3 top-1/2 -translate-y-1/2 z-50" />
    </>
  );
};
