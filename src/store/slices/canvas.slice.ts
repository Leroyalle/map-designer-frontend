import { ToolConfig } from '@/config';
import { Canvas, FabricObject } from 'fabric';
import { create } from 'zustand';

interface Store {
  canvas: Canvas | null;
  objects: FabricObject[];
  selectedTool: ToolConfig | null;
  selectedObject: FabricObject | null;
  setCanvas: (canvas: Canvas | null) => void;
  setObjects: (object: FabricObject) => void;
  setSelectedTool: (object: ToolConfig | null) => void;
  setSelectedObject: (object: FabricObject | null) => void;
}

export const useCanvasSlice = create<Store>()((set) => ({
  canvas: null,
  objects: [],
  selectedTool: null,
  selectedObject: null,
  setCanvas: (canvas) => set({ canvas }),
  setObjects: (object) =>
    set((prev) => ({
      objects: [...prev.objects, object],
    })),
  setSelectedObject: (object) => {
    console.log(object);
    set({ selectedObject: object });
  },
  setSelectedTool: (object) => set({ selectedTool: object }),
}));
