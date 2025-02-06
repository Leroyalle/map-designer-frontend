import { Dialog, DialogContent, DialogHeader, DialogTitle, Typography } from '@/components/ui';
import { PublishedPopupFooter } from './components';

export const PublishedLinkPopup: React.FC = () => {
  return (
    <Dialog>
      <DialogContent className="gap-0">
        <DialogHeader className=" pb-[30px]">
          <DialogTitle className="text-xl">Карта опубликована!</DialogTitle>
        </DialogHeader>
        <div>
          <Typography className="text-[#5C5E6B] pb-1.5">
            Публичная ссылка на эту страницу:
          </Typography>
          <p className="text-2xl font-medium">https://maps.ru/51231231</p>
        </div>

        <PublishedPopupFooter />
      </DialogContent>
    </Dialog>
  );
};
