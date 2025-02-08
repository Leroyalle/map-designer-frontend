import { FormInput } from '@/components/shared';
import { CardContent } from '@/components/ui';
import React from 'react';
import { ImageViewer } from './image-viewer';
import { ImageUploader } from './image-uploader';
import { DescriptionFields } from './description-fields';
import { TimeFloorInputs } from './time-floor-inputs';

interface Props {
  uploadLink: File | null;
  setUploadLink: (value: File | null) => void;
  fileName: string;
  setFileName: (value: string) => void;
}

export const ObjectParamsMain: React.FC<Props> = ({
  uploadLink,
  setUploadLink,
  fileName,
  setFileName,
}) => {
  return (
    <CardContent className="flex flex-col gap-4">
      <FormInput
        classNames={{
          inputWrapper: 'object-form-wrapper',
          input: 'object-form-input',
        }}
        name="name"
        placeholder="Название"
        maxLength={40}
      />

      <div className="text-background bg-[#373737] border-[#5A5A5A] border-dashed border-2 rounded-sm p-3">
        {uploadLink ? (
          <ImageViewer fileName={fileName} setUploadLink={setUploadLink} />
        ) : (
          <ImageUploader setFileName={setFileName} setUploadLink={setUploadLink} />
        )}
      </div>

      <DescriptionFields />

      <TimeFloorInputs />

      <FormInput
        classNames={{
          inputWrapper: 'object-form-wrapper',
          input: 'object-form-input',
        }}
        name="link"
        placeholder="Ссылка на сайт"
      />
    </CardContent>
  );
};
