'use client';
import React from 'react';
import { cn } from '@/lib/utils';
import { CanvasField } from './canvas-field';
import { CanvasToolbar } from './canvas-toolbar';
import { CanvasSettings } from './canvas-settings';
import { ObjectParams } from './object';

interface Props {
  className?: string;
}

export const CanvasWrapper: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn('', className)}>
      <CanvasSettings className="fixed top-1/2 left-3 -translate-y-1/2 z-50" />
      <CanvasField />
      <CanvasToolbar className="fixed bottom-3 left-1/2 -translate-x-1/2 z-50" />
      <ObjectParams className="fixed right-3 top-1/2 -translate-y-1/2 z-50" />
    </div>
  );
};
