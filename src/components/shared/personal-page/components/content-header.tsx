import { Map } from 'lucide-react';
import React from 'react';

interface Props {
  title: string;
}

export const ContentHeader: React.FC<Props> = ({ title }) => {
  return (
    <>
      <div className="mx-5 flex text-[#5C5E6B] py-[10px]  items-center">
        <Map strokeWidth={0.9} size={20} className="mr-3.5 " />
        {title}
      </div>
      <hr />
    </>
  );
};
