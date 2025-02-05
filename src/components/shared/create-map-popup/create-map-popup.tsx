'use client';
import { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { DialogFooterBlock, DialogHeaderBlock, DialogMainBlock } from './components';

export function CreateMapPopup() {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[554px] rounded-[10px]">
        <DialogHeaderBlock />
        <DialogMainBlock />
        <DialogFooterBlock />
      </DialogContent>
    </Dialog>
  );
}
