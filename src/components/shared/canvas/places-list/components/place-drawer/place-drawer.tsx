import React from 'react';
import { Drawer, DrawerBody, DrawerContent, DrawerHeader } from '@heroui/react';
import { ProjectItem } from '@/types';
import { useScrollToObject } from '@/hooks';
import { useCanvasSlice } from '@/store';
import { PlaceDrawerBody } from './place-drawer-body';

interface Props {
  isOpen: boolean;
  placeData: ProjectItem;
  onOpenChange: () => void;
}

export const PlaceDrawer: React.FC<Props> = ({ isOpen, placeData, onOpenChange }) => {
  const canvas = useCanvasSlice((state) => state.canvas);
  useScrollToObject(canvas, placeData, 1.2, isOpen);

  return (
    <Drawer
      className="bg-accent"
      classNames={{
        wrapper: 'pointer-events-none',
        body: 'pointer-events-auto',
        closeButton: 'pointer-events-auto',
      }}
      backdrop="transparent"
      size="sm"
      isDismissable={false}
      isKeyboardDismissDisabled={true}
      placement="left"
      isOpen={isOpen}
      motionProps={{
        variants: {
          enter: {
            opacity: 1,
            x: 0,
          },
          exit: {
            x: -100,
            opacity: 0,
          },
        },
      }}
      onOpenChange={onOpenChange}>
      <DrawerContent>
        {() => (
          <>
            <DrawerHeader className="flex flex-col gap-1">{placeData.name}</DrawerHeader>
            <DrawerBody>
              <PlaceDrawerBody
                shortDesc={placeData.shortDesc}
                desc={placeData.desc}
                floor={placeData.floor}
                time={placeData.time}
                link={placeData.link}
              />
            </DrawerBody>
          </>
        )}
      </DrawerContent>
    </Drawer>
  );
};
