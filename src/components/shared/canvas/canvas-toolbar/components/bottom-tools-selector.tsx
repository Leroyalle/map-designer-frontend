'use client';
import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger } from '@/components/ui';

interface Props {
  toolColection: { toolImage: string }[];
}

export const BottomToolsSelector: React.FC<Props> = ({ toolColection }) => {
  const [selectedImage, setSelectedImage] = React.useState<string>(toolColection[0].toolImage);

  const handleSelectChange = (value: string) => {
    setSelectedImage(value);
  };

  return (
    <Select onValueChange={handleSelectChange}>
      <SelectTrigger className="focus:ring-0 border-0">
        <img src={selectedImage} alt="tool image" className="cursor-pointer w-6 h-6" />
      </SelectTrigger>
      <SelectContent className="bg-[#262626]">
        {toolColection.map((collectionItem, id) => (
          <SelectItem
            key={id}
            value={collectionItem.toolImage}
            className="focus:bg-[#535353] text-background focus:text-background ">
            <img
              src={collectionItem.toolImage}
              alt="tool image"
              className="cursor-pointer w-6 h-6"
            />
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
