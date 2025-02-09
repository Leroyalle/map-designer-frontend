import { Typography } from '@/components/ui';
import { Paperclip, X } from 'lucide-react';
import React from 'react';
import { GreenCheck } from './green-check';

interface Props {
  fileName: string;
  setUploadLink: (link: null) => void;
}

export const ImageViewer: React.FC<Props> = ({ fileName, setUploadLink }) => {
  return (
    <div className="flex gap-x-[10px]">
      <div className="rounded-full w-8 h-8 bg-[#5A5A5A] flex items-center justify-center flex-shrink-0">
        <Paperclip size={16} />
      </div>
      <div className="flex-1 cursor-pointer">
        <span>Вложение</span>
        <Typography className="text-[#2196F3]">{fileName}</Typography>
      </div>
      <div className="flex items-center gap-2">
        <GreenCheck />
        <X className="cursor-pointer text-end" size={21} onClick={() => setUploadLink(null)} />
      </div>
    </div>
  );
};
