import { Canvas, FabricObject } from 'fabric';
import { create } from 'zustand';

interface Store {
  canvas: Canvas | null;
  objects: FabricObject[];
  selectedObject: FabricObject | null;
  setCanvas: (canvas: Canvas | null) => void;
  setObjects: (object: FabricObject) => void;
  setSelectedObject: (object: FabricObject | null) => void;
}

export const useCanvasSlice = create<Store>()((set) => ({
  canvas: null,
  objects: [],
  selectedObject: null,
  setCanvas: (canvas) => set({ canvas }),
  setObjects: (object) =>
    set((prev) => ({
      objects: [...prev.objects, object],
    })),
  setSelectedObject: (object) => set({ selectedObject: object }),
}));
