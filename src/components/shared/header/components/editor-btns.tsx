import { Button } from '@/components/ui';
import { Eye } from 'lucide-react';
import React from 'react';

export const EditorBtns: React.FC = () => {
  const isWatchMaps = false;
  return (
    <div className="flex flex-row">
      {isWatchMaps ? (
        <Button>Редактор</Button>
      ) : (
        <>
          <Button variant="ghost">
            <Eye />
            <p>Предпросмотр</p>
          </Button>
          <Button>Опубликовать</Button>
        </>
      )}
    </div>
  );
};
