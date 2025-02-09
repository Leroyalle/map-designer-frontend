'use client';
import { Typography } from '@/components/ui';
import { cn } from '@/lib';
import React from 'react';

interface Props {
  selectedFile: File | null;
  onChange: (file: File) => void;
}

export const UploadField: React.FC<Props> = ({ selectedFile, onChange }) => {
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      onChange(file);
    }
  };
  return (
    <div
      className={cn(
        'border-2 max-h-[223px] border-dashed border-foreground/20 rounded-md text-center flex flex-col items-center cursor-pointer overflow-hidden',
        !selectedFile && 'p-4',
      )}>
      <label htmlFor="imageUpload" className="cursor-pointer flex flex-col items-center">
        <img
          src={selectedFile ? URL.createObjectURL(selectedFile) : '/img/upload-schema.jpg'}
          alt="project"
          className={cn('object-cover', selectedFile ? 'h-full w-full' : 'w-[145px] h-[129px]')}
        />
        {!selectedFile && (
          <>
            <span className="text-[#2196F3] font-medium pt-3">Нажмите, чтобы загрузить схему</span>
            <Typography className="text-gray-500 mt-1">.png, .jpg, .pdf</Typography>
          </>
        )}
      </label>
      <input
        onChange={handleImageUpload}
        id="imageUpload"
        type="file"
        accept=".png,.jpg,.pdf"
        className="hidden"
      />
    </div>
  );
};
