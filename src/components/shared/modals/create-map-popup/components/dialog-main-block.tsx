import React from 'react';
import { UploadField } from './upload-field';

export const DialogMainBlock: React.FC = () => {
  return (
    <div className="grid gap-4 pt-4">
      <input
        required
        id="projectName"
        placeholder="Название проекта"
        className="bg-[#FAFAFA] p-3 rounded-[10px] placeholder:text-[#5C5E6B]"
      />
      <UploadField />
    </div>
  );
};
