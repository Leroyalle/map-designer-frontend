import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

export function CreateMapPopup() {
  return (
    <Dialog open={true}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Новое окно</DialogTitle>
          <DialogDescription>Назовите проект и загрузите карту</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <input id="projectName" placeholder="Название проекта" />
          <div className="border-2 border-dashed border-gray-300 rounded-md p-4 text-center cursor-pointer">
            <label htmlFor="imageUpload" className="cursor-pointer">
              <span className="text-[#2196F3] font-medium">Нажмите, чтобы загрузить схему</span>
              <p className="text-sm text-gray-500 mt-1">.png, .jpg, .pdf</p>
            </label>
            <input id="imageUpload" type="file" accept=".png,.jpg,.pdf" className="hidden" />
          </div>
        </div>
        <DialogFooter className="flex flex-col items-center">
          <Button type="submit" className="w-full">
            Создать проект
          </Button>
          <p className="text-[#5C5E6B] text-xs mt-4 text-center">
            Загружая материалы, вы соглашаетесь с тем, что являетесь владельцем таких материалов или
            обладаете необходимыми правами на них и что вы предоставляете нам право использовать
            такие материалы в соответствии с условиями подписки
          </p>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
