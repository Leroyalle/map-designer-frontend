import { Canvas } from 'fabric';
import { create } from 'zustand';

interface Store {
  canvas: Canvas | null;
  setCanvas: (canvas: Canvas | null) => void;
}

export const useCanvasSlice = create<Store>()((set) => ({
  canvas: null,
  setCanvas: (canvas) => set({ canvas }),
}));
