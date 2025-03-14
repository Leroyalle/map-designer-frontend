import { DialogFooter } from '@/components/ui';
import React from 'react';

export const DialogFooterBlock: React.FC = () => {
  return (
    <DialogFooter>
      <div className="flex flex-col gap-9">
        <span className="text-[#5C5E6B] text-xs text-center">
          Загружая материалы, вы соглашаетесь с тем, что являетесь владельцем таких материалов или
          обладаете необходимыми правами на них и что вы предоставляете нам право использовать такие
          материалы в соответствии с условиями подписки
        </span>
      </div>
    </DialogFooter>
  );
};
