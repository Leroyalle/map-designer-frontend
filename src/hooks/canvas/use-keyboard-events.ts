'use client';
import { handleCopy, handleDelete, handlePaste } from '@/lib';
import { Canvas } from 'fabric';
import { RefObject, useEffect, useRef, useState } from 'react';

export const useKeyboardEvents = (
  activeButtonPressed: RefObject<KeyboardEvent['code'] | null>,
  isPanning: RefObject<boolean>,
  canvas: Canvas | null,
) => {
  const [isCtrlPressed, setIsCtrlPressed] = useState(false);
  const offset = useRef<number>(10);

  const history = useRef<string[]>([]);
  const redoStack = useRef<string[]>([]);

  const isSuppressingSave = useRef(false);

  const saveState = () => {
    if (!canvas || isSuppressingSave.current) return;

    const currentState = JSON.stringify(canvas.toJSON());

    if (
      history.current.length === 0 ||
      history.current[history.current.length - 1] !== currentState
    ) {
      history.current.push(currentState);
      redoStack.current = [];
      console.log(history.current);
    }
  };

  useEffect(() => {
    if (!canvas) return;

    canvas.on('object:added', saveState);
    canvas.on('object:modified', saveState);
    canvas.on('object:removed', saveState);

    return () => {
      canvas.off('object:added', saveState);
      canvas.off('object:modified', saveState);
      canvas.off('object:removed', saveState);
    };
  }, [canvas]);

  useEffect(() => {
    if (!canvas) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      activeButtonPressed.current = e.code;

      if (e.code === 'ControlLeft' && !isPanning.current) {
        setIsCtrlPressed(true);
      }

      if (e.code === 'Delete') {
        handleDelete(canvas);
      }

      if (e.code === 'KeyC' && isCtrlPressed) {
        handleCopy(canvas, offset);
      }

      if (e.code === 'KeyV' && isCtrlPressed) {
        handlePaste(canvas, offset);
      }

      if (e.code === 'KeyZ' && isCtrlPressed && history.current.length > 0) {
        console.log(history.current);
        isSuppressingSave.current = true;

        redoStack.current.push(history.current.pop()!);
        const prevState = JSON.parse(history.current[history.current.length - 1]);
        console.log('prevState', prevState);

        if (prevState) {
          canvas
            .loadFromJSON(prevState)
            .then(() => {
              console.log(canvas);
              canvas.renderAll();
              isSuppressingSave.current = false;
            })
            .catch((error) => {
              console.error('Ошибка при загрузке состояния:', error);
              isSuppressingSave.current = false;
            });
        }
      }

      if (e.code === 'KeyY' && isCtrlPressed && redoStack.current.length > 0) {
        isSuppressingSave.current = true;

        const nextState = JSON.parse(redoStack.current.pop()!);
        history.current.push(nextState);

        canvas.loadFromJSON(nextState).then(() => {
          canvas.renderAll();
          isSuppressingSave.current = false;
        });
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.code === 'ControlLeft') {
        setIsCtrlPressed(false);
      }
      activeButtonPressed.current = null;
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [canvas, isCtrlPressed, isPanning, activeButtonPressed]);

  return { isCtrlPressed };
};
