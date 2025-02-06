import { Dialog, DialogContent } from '@/components/ui/dialog';
import { DialogFooterBlock, DialogHeaderBlock, DialogMainBlock } from './components';
import { useAppContext } from '@/hooks';

export const CreateMapPopup: React.FC = () => {
  const { isOpen, onChange } = useAppContext();

  return (
    <Dialog open={isOpen} onOpenChange={onChange}>
      <DialogContent className="sm:max-w-[554px] rounded-[10px]">
        <DialogHeaderBlock />
        <DialogMainBlock />
        <DialogFooterBlock />
      </DialogContent>
    </Dialog>
  );
};
