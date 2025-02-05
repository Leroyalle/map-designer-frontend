import React from 'react';

export const DialogMainBlock: React.FC = () => {
  return (
    <div className="grid gap-4 pt-4">
      <input
        required
        id="projectName"
        placeholder="Название проекта"
        className="bg-[#FAFAFA] p-3 rounded-[10px] placeholder:text-[#5C5E6B]"
      />

      <div className="border-2  border-dashed border-gray-300 rounded-md p-4 text-center cursor-pointer">
        <label htmlFor="imageUpload" className="cursor-pointer flex flex-col items-center">
          <img src="images/upload-schema.jpg" alt="" height={129} width={145} />
          <span className="text-[#2196F3] font-medium pt-3">Нажмите, чтобы загрузить схему</span>
          <p className="text-sm text-gray-500 mt-1">.png, .jpg, .pdf</p>
        </label>
        <input id="imageUpload" type="file" accept=".png,.jpg,.pdf" className="hidden" />
      </div>
    </div>
  );
};
