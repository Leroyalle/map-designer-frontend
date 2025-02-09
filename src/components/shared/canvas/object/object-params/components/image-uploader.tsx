import { Typography } from '@/components/ui';
import { Paperclip } from 'lucide-react';
import React from 'react';

interface Props {
  setFileName: (value: string) => void;
  setUploadLink: (value: File) => void;
}

export const ImageUploader: React.FC<Props> = ({ setFileName, setUploadLink }) => {
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileName(file.name);
      setUploadLink(file);
    }
  };

  return (
    <label htmlFor="imageUpload" className="flex gap-x-[10px] cursor-pointer">
      <div className="rounded-full w-8 h-8 bg-[#5A5A5A] flex items-center justify-center flex-shrink-0">
        <Paperclip size={16} />
      </div>
      <div className="flex flex-col">
        <span>Добавить логотип</span>
        <Typography className="text-[#6e6e6e]">
          Нажмите, чтобы загрузить файл. Максимальный размер - 5MB
        </Typography>
      </div>
      <input
        onChange={handleImageUpload}
        id="imageUpload"
        type="file"
        accept=".png,.jpg,.pdf"
        className="hidden"
      />
    </label>
  );
};
