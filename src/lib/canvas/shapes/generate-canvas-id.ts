export const generateCanvasId = () => {
  return `canvasId-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`;
};
