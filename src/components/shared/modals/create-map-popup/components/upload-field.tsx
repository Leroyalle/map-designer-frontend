import { Typography } from '@/components/ui';
import { cn } from '@/lib';
import React from 'react';

export const UploadField: React.FC = ({}) => {
  const [uploadLink, setUploadLink] = React.useState('');

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadLink(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div
      className={cn(
        'border-2 max-h-[300px]  border-dashed border-gray-300 rounded-md text-center flex flex-col items-center cursor-pointer overflow-hidden',
        !uploadLink && ' p-4 ',
      )}>
      <label htmlFor="imageUpload" className="cursor-pointer flex flex-col items-center">
        <img
          src={uploadLink ? uploadLink : 'images/upload-schema.jpg'}
          alt="project"
          className={cn(uploadLink ? 'h-auto max-h-[300px]' : 'w-[145px] h-[129px]')}
        />
        {!uploadLink && (
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
