'use client';
import { useCallback, useState } from 'react';

export const useCanvasDimensions = (canvasWidth: number, canvasHeight: number) => {
  const [dimensions, setDimensions] = useState({
    width: canvasWidth || 1000,
    height: canvasHeight || 500,
  });

  const handleDimensionChange = useCallback(
    (type: 'width' | 'height') => (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value.replace(/\D/g, '');
      const intValue = Math.min(Math.max(1, parseInt(value, 10) || 0), 2500);
      setDimensions((prev) => ({ ...prev, [type]: intValue }));
    },
    [],
  );

  // FIXME: add change canvas dimensions
  // useEffect(() => {
  //   if (canvas && dimensions.width && dimensions.height && dimensions) {
  //     console.log('CAnvas dismissions:', canvas);
  //     canvas.setWidth(dimensions.width || 1000);
  //     canvas.setHeight(dimensions.height || 500);
  //   }
  // }, [canvas, dimensions.width, dimensions.height, dimensions]);

  return { dimensions, handleDimensionChange };
};
