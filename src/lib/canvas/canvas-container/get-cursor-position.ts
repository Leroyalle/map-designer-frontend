export const getCursorPositionRelativeToContainer = (
  e: MouseEvent,
  container: HTMLDivElement,
): { x: number; y: number } => {
  const rect = container.getBoundingClientRect();
  return {
    x: e.clientX - rect.left,
    y: e.clientY - rect.top,
  };
};
