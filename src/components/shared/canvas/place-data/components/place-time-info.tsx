import React from 'react';

interface Props {
  time: Date;
  isOpenPlace: boolean;
}

export const PlaceTimeInfo: React.FC<Props> = ({ isOpenPlace, time }) => {
  return (
    <div className="flex flex-col gap-1">
      <h3>Время работы</h3>
      <div className="flex gap-2.5">
        <span className={isOpenPlace ? `text-[#4C9E6E]` : `text-[#e03939]`}>
          {isOpenPlace ? 'Открыто' : 'Закрыто'}
        </span>
        <span className="text-[#D9D9D9]">•</span>
        <span className="text-[#878787]">10:00 - 18:00</span>
      </div>
    </div>
  );
};
