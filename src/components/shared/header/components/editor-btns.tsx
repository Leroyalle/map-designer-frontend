import { Button, Typography } from '@/components/ui';
import { usePublishProject } from '@/hooks/project';
import { getSingleId, isCircle, isImage } from '@/lib';
import { useCanvasSlice } from '@/store';
import { CanvasProjectItem, NavRoutesEnum } from '@/types';
import { Eye } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React from 'react';

export const EditorBtns: React.FC = () => {
  const isWatchMaps = false;
  const { canvas } = useCanvasSlice();
  const { id: projectId } = useParams();

  const { publishProject } = usePublishProject();

  const handlePublish = () => {
    if (!canvas || !projectId) return;
    const canvasWidth = canvas.getWidth();
    const canvasHeight = canvas.getHeight();
    console.log(
      'ITEMS BEFORE PUSH',
      canvas.getObjects().filter((e) => e.name !== 'background'),
    );
    const items: CanvasProjectItem[] = canvas
      .getObjects()
      .filter((obj) => obj.name !== 'background')
      .map((obj) => ({
        canvasId: obj.canvasId,
        name: obj.name,
        desc: obj.desc,
        shortDesc: obj.shortDesc,
        time: obj.time,
        floor: obj.floor,
        link: obj.link,
        placeColor: obj.placeColor,
        width: obj.width,
        height: obj.height,
        originX: obj.originX,
        originY: obj.originY,
        imageUrl: isImage(obj) ? obj._element?.src : null,
        radius: isCircle(obj) ? obj.radius : null,
        fill: obj.fill?.toString(),
        strokeWidth: obj.strokeWidth,
        stroke: obj.stroke,
        type: obj.type,
        left: obj.left,
        top: obj.top,
        angle: obj.angle,
        scaleX: obj.scaleX,
        scaleY: obj.scaleY,
      }));
    publishProject({ id: getSingleId(projectId), canvasWidth, canvasHeight, items });
  };

  return (
    <div className="flex flex-row">
      {isWatchMaps ? (
        <Button>Редактор</Button>
      ) : (
        <>
          <Button variant="ghost" asChild>
            <Link href={`${NavRoutesEnum.PROJECT}/${projectId}${NavRoutesEnum.PROJECT_VIEW}`}>
              <Eye />
              <Typography>Предпросмотр</Typography>
            </Link>
          </Button>
          <Button onClick={handlePublish}>Опубликовать</Button>
        </>
      )}
    </div>
  );
};
