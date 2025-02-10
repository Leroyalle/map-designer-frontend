import { getCursorPositionRelativeToContainer } from './get-cursor-position';

const scaleSetting = {
  min: 0.4,
  max: 3,
  sensitivity: 0.001,
} as const;

export const handleZoom = (
  e: WheelEvent,
  container: HTMLDivElement,
  setContainerTransform: React.Dispatch<
    React.SetStateAction<{ x: number; y: number; scale: number }>
  >,
) => {
  e.preventDefault();

  const currentTransform = container.style.transform;
  const scaleMatch = currentTransform.match(/scale\(([\d.]+)\)/);
  const translateMatch = currentTransform.match(/translate\(([-\d.]+)px,\s*([-\d.]+)px\)/);
  const currentScale = parseFloat(scaleMatch?.[1] || '1');
  const currentX = parseFloat(translateMatch?.[1] || '0');
  const currentY = parseFloat(translateMatch?.[2] || '0');

  const { x: mouseX, y: mouseY } = getCursorPositionRelativeToContainer(e, container);

  const rect = container.getBoundingClientRect();
  const containerWidth = rect.width;
  const containerHeight = rect.height;

  const delta = e.deltaY * scaleSetting.sensitivity;
  const newScale = Math.min(
    Math.max(currentScale * Math.pow(2, -delta), scaleSetting.min),
    scaleSetting.max,
  );

  const newTranslateX = currentX + (mouseX - containerWidth / 2) * (1 - newScale / currentScale);
  const newTranslateY = currentY + (mouseY - containerHeight / 2) * (1 - newScale / currentScale);

  setContainerTransform({
    x: newTranslateX,
    y: newTranslateY,
    scale: newScale,
  });
};
